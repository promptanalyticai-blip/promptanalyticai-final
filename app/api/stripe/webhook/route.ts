import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Supabase (server-side)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Webhook necesita desactivar el body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Convertir Request a Buffer
async function buffer(readable: ReadableStream<Uint8Array>) {
  const chunks = [];
  const reader = readable.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return Buffer.concat(chunks);
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const buf = await buffer(req.body);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("⚠️ Error verificando webhook:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Procesar eventos importantes
  try {
    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const stripeCustomerId = subscription.customer as string;

        // Obtener plan desde Stripe
        const priceId = subscription.items.data[0].price.id;

        let plan = "basic";

        if (priceId === process.env.STRIPE_PRICE_PREMIUM) plan = "premium";
        if (priceId === process.env.STRIPE_PRICE_ENTERPRISE) plan = "enterprise";

        // Actualizar Supabase
        const { error } = await supabase
          .from("user_plans")
          .update({
            plan,
            stripe_subscription_id: subscription.id,
            subscription_status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000),
            current_period_end: new Date(subscription.current_period_end * 1000),
            cancel_at: subscription.cancel_at
              ? new Date(subscription.cancel_at * 1000)
              : null,
            canceled_at: subscription.canceled_at
              ? new Date(subscription.canceled_at * 1000)
              : null,
            updated_at: new Date(),
          })
          .eq("stripe_customer_id", stripeCustomerId);

        if (error) {
          console.error("Error actualizando Supabase:", error);
        }

        break;
      }

      default:
        console.log(`Evento ignorado: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Error procesando webhook:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}

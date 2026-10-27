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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_id } = body;

    if (!user_id) {
      return NextResponse.json(
        { error: "user_id es requerido" },
        { status: 400 }
      );
    }

    // 1) Obtener datos del usuario en Supabase
    const { data: userPlanData, error: userPlanError } = await supabase
      .from("user_plans")
      .select("*")
      .eq("user_id", user_id)
      .single();

    if (userPlanError || !userPlanData) {
      return NextResponse.json(
        { error: "No se encontró información del plan del usuario" },
        { status: 404 }
      );
    }

    const stripeCustomerId = userPlanData.stripe_customer_id;

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: "El usuario no tiene un cliente de Stripe asociado" },
        { status: 400 }
      );
    }

    // 2) Crear sesión del portal de facturación
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/blayzit/v6/planes`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creando portal de facturación:", error);
    return NextResponse.json(
      { error: "Error creando portal de facturación" },
      { status: 500 }
    );
  }
}

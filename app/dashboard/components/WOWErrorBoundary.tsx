//app/dashboard/components/WOWErrorBoundary.tsx
"use client";

import React from "react";
import { useWOWState } from "../state/WOWStateProvider";
import { handleWOWError } from "@/lib/wow-error-handler";

export default class WOWErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, rawError: error };
  }

  componentDidCatch(error) {
    // WOWStateProvider está en el árbol, así que podemos usarlo
    const wowState = window.__WOW_STATE__;
    if (wowState?.wow) {
      const msg = handleWOWError(wowState.wow, error);
      this.setState({ message: msg.message });
    } else {
      this.setState({ message: "Ocurrió un error inesperado." });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-300 rounded-lg">
          <h2 className="text-xl font-bold text-red-700">Error</h2>
          <p className="text-red-600">{this.state.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

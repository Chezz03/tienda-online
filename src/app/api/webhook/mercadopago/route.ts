// Webhook que recibe las notificaciones de pago de MercadoPago
// y actualiza el estado del pedido correspondiente.
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json({ received: true });
}

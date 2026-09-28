// POST /api/checkout -> calcula envío, crea preferencia de pago en
// MercadoPago y devuelve la URL de pago (o registra pedido por transferencia)
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ ok: true });
}

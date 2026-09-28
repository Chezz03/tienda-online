// GET  /api/carrito -> obtiene el carrito actual (por sesión/cookie)
// POST /api/carrito -> agrega/actualiza un item del carrito
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ items: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ ok: true, body });
}

// GET /api/productos      -> lista productos (con filtros por query params)
// POST /api/productos     -> crea producto (admin)
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ productos: [] });
}

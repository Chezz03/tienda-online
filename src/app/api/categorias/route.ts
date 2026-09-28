// GET /api/categorias -> árbol de categorías y subcategorías
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ categorias: [] });
}

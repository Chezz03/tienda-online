// Tipos compartidos entre frontend y backend.
export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  precioBase: number;
  descuento: number;
}

export interface Variante {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
}

export interface ItemCarrito {
  varianteId: string;
  cantidad: number;
}

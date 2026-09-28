// Estado global del carrito (Zustand): items, cantidad total, funciones
// agregarItem / quitarItem / vaciarCarrito.
import { create } from "zustand";

interface CarritoState {
  items: unknown[];
}

export const useCarritoStore = create<CarritoState>(() => ({
  items: [],
}));

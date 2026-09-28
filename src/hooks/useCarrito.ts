// Hook para leer/modificar el carrito desde cualquier componente.
import { useCarritoStore } from "@/store/carritoStore";

export function useCarrito() {
  return useCarritoStore();
}

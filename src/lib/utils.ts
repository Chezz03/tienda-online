// Utilidades generales: formateo de precios en ARS, cálculo de cuotas, etc.
export function formatearPrecio(valor: number) {
  return valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
}

# Modelo de datos

Ver `prisma/schema.prisma`. Resumen de entidades:

- **Categoria**: jerárquica (categoría padre / subcategorías).
- **Producto**: pertenece a una categoría, tiene imágenes y variantes.
- **Variante**: versión concreta de un producto (medida, color) con su
  propio precio y stock.
- **Usuario / Pedido / ItemPedido**: cuentas y pedidos realizados.

# Flujo de compra

1. Usuario navega categoría o busca producto → `ProductCard`.
2. Entra a la ficha (`/productos/[slug]`), elige variante y agrega al carrito.
3. Revisa el carrito (`/carrito`), calcula envío por código postal.
4. Va a `/checkout`, completa datos y elige medio de pago.
5. Si paga con MercadoPago: se crea una preferencia y se redirige a pagar;
   el webhook confirma el pago y actualiza el pedido.
6. Si paga por transferencia: el pedido queda "pendiente" hasta confirmar
   el pago manualmente.

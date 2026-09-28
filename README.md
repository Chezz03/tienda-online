# Tienda Online

Estructura base para una tienda online estilo **Somos FANS** (catálogo por
categorías, fichas de producto con variantes, carrito, checkout con
MercadoPago/transferencia y contacto por WhatsApp).

## Stack sugerido

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** para estilos
- **Prisma** + **PostgreSQL** para la base de datos
- **Zustand** para el estado del carrito
- **MercadoPago SDK** para pagos (Argentina)
- **NextAuth** para cuentas de usuario (login / registro)

## Estructura de carpetas

```
tienda-online/
├── prisma/
│   └── schema.prisma          # Modelos: Producto, Variante, Categoria, Pedido, Usuario
├── public/
│   └── images/                # Imágenes de productos y banners
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home (hero, más vendidos, banners)
│   │   ├── layout.tsx                  # Layout global (Header + Footer)
│   │   ├── productos/
│   │   │   ├── page.tsx                # Listado de todos los productos
│   │   │   └── [slug]/page.tsx         # Ficha de producto
│   │   ├── categoria/[slug]/page.tsx   # Productos por categoría
│   │   ├── carrito/page.tsx            # Carrito de compras
│   │   ├── checkout/page.tsx           # Checkout (envío + pago)
│   │   ├── contacto/page.tsx           # Formulario de contacto
│   │   ├── preguntas-frecuentes/page.tsx
│   │   ├── cuenta/
│   │   │   ├── login/page.tsx
│   │   │   └── registro/page.tsx
│   │   └── api/
│   │       ├── productos/route.ts
│   │       ├── categorias/route.ts
│   │       ├── carrito/route.ts
│   │       ├── checkout/route.ts
│   │       └── webhook/mercadopago/route.ts
│   ├── components/
│   │   ├── layout/       # Header, Footer, NavCategorias
│   │   ├── producto/     # ProductCard, ProductGallery, SelectorVariante
│   │   ├── carrito/      # CartDrawer, CartItem, ResumenCarrito
│   │   └── ui/           # Botones, inputs, badges reutilizables
│   ├── lib/               # prisma.ts, mercadopago.ts, utils.ts
│   ├── hooks/              # useCarrito, useProductos
│   ├── store/              # estado global (carrito con Zustand)
│   ├── types/              # tipos TS compartidos
│   └── styles/             # globals.css
├── .github/workflows/       # CI (lint/build)
├── .env.example
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Primeros pasos

```bash
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run dev
```

## Notas de dominio

- Cada **Producto** puede tener **Variantes** (ej: medidas 10x34cm, 12x59cm, etc.)
  con precio y stock propios.
- Las **Categorías** son jerárquicas (ej: "Ojos LED" → "Para Camión" / "Para Auto y Camioneta"),
  igual que en el sitio de referencia.
- El checkout soporta dos medios de pago: MercadoPago (cuotas) y transferencia
  (con descuento).
- El botón flotante de WhatsApp usa el número configurado en `.env`.

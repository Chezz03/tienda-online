// Configuración del SDK de MercadoPago (crear preferencias de pago).
import { MercadoPagoConfig, Preference } from "mercadopago";

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export const preferenceClient = new Preference(mercadopago);

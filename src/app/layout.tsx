// Layout global: envuelve todas las páginas con Header, Footer
// y el botón flotante de WhatsApp.
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";

export const metadata = {
  title: "Tienda Online",
  description: "Catálogo de productos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}

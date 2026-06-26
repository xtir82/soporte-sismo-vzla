import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soporte Sismo Venezuela - Portal de Asistencia y Coordinación",
  description: "Portal comunitario para coordinar centros de acopio, reportes de personas afectadas, información útil de emergencia y contacto directo de ayuda.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased selection:bg-destructive/15 selection:text-destructive">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

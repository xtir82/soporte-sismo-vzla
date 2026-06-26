import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soporte Sismo Venezuela - Portal de Asistencia y Coordinación",
  description: "Portal ciudadano, independiente y sin fines de lucro para coordinar la localización de personas, centros de acopio e información de emergencia ante el sismo en Venezuela.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

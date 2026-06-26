import * as React from "react"
import Link from "next/link"
import { Mail, Phone, MessageSquare, ArrowLeft, Send, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-8">
      {/* Breadcrumb / Back button */}
      <div>
        <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="size-4" data-icon="inline-start" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Mail className="size-8 text-primary" />
          Contacto y Colaboración
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          ¿Deseas reportar información, registrar tu organización o colaborar como voluntario digital? Escríbenos.
        </p>
      </div>

      {/* Info Callout */}
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4">
        <div className="rounded-md bg-blue-500/10 p-2 text-blue-500 shrink-0">
          <Info className="size-5" />
        </div>
        <div className="flex flex-col gap-1.5 font-sans">
          <h3 className="font-semibold text-sm text-foreground">¿Deseas agregar o enviar información?</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Si deseas reportar nuevos datos, actualizar listas de personas, registrar centros de acopio o enviar información de utilidad para la plataforma, puedes escribirnos directamente a nuestro correo electrónico:{" "}
            <a 
              href="mailto:soportesismovenezuela@gmail.com" 
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              soportesismovenezuela@gmail.com
            </a>
            . Por favor, envía toda la información detallada que desees aportar.
          </p>
        </div>
      </div>

    </div>
  )
}

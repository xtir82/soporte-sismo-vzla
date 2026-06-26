import * as React from "react"
import Link from "next/link"
import { Search, UserCheck, ArrowLeft, ShieldAlert, ExternalLink, UserPlus, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function EncontrarPersonasPage() {
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
          <Search className="size-8 text-primary" />
          Encontrar Personas
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Herramientas de búsqueda y reporte de estado para familiares y personas en las zonas afectadas por el sismo.
        </p>
      </div>

      {/* Top Notice */}
      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardContent className="flex gap-3 py-4">
          <ShieldAlert className="size-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-400 font-sans">Canales de Búsqueda Ciudadanos</h4>
            <p className="text-xs text-blue-700/90 dark:text-blue-400/80 leading-relaxed font-sans">
              Las siguientes herramientas y listados son mantenidos por la comunidad. Si tiene información urgente sobre rescates o emergencias médicas críticas, comuníquese de inmediato al 911 o con Protección Civil.
            </p>
          </div>
        </CardContent>
      </Card>


    </div>
  )
}

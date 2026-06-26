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
      {/* Registration/Consultation Card */}
      <Card className="border-border bg-card shadow-xs">
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2 font-sans">
            <ClipboardList className="size-5 text-primary" />
            Canales de Registro y Consulta de Personas
          </CardTitle>
          <CardDescription className="text-xs">
            Seleccione una opción para registrar información o buscar en los listados coordinados por la comunidad.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
            <div className="flex gap-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Search className="size-5" />
              </div>
              <div className="flex flex-col gap-1 font-sans">
                <h3 className="font-semibold text-foreground text-sm">Registro Ciudadano de Desaparecidos</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                  Quienes tengan familiares, amigos o allegados que se encuentren como "desaparecidos", pueden ingresar a este canal externo para consultar la base de datos o reportar a una persona que no haya sido ubicada.
                </p>
              </div>
            </div>
            <Button asChild variant="default" size="sm" className="text-xs font-semibold shrink-0 w-full md:w-auto">
              <a 
                href="https://desaparecidosterremotovenezuela.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1"
              >
                Consultar o Reportar
                <ExternalLink className="size-3" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

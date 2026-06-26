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
          <Search className="size-8 text-destructive" />
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

      {/* Main card with 4 links */}
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2 font-sans">
            <ClipboardList className="size-5 text-destructive" />
            Acceso Rápido a Listados y Reportes
          </CardTitle>
          <CardDescription className="text-sm font-sans">
            Utiliza los siguientes enlaces para registrar datos o buscar familiares en las bases de datos de apoyo humanitario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Link 1: Reportar Persona a Salvo */}
            <div className="flex flex-col justify-between p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors gap-3">
              <div className="flex items-start gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <UserCheck className="size-5" />
                </div>
                <div className="flex flex-col gap-1 font-sans">
                  <h4 className="text-sm font-semibold text-foreground">1. Reportar Persona a Salvo (Formulario)</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Registra que te encuentras a salvo o confirma que has localizado a un familiar.
                  </p>
                </div>
              </div>
              <Button asChild size="sm" className="w-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white mt-2">
                <a href="https://forms.gle/placeholder1" target="_blank" rel="noopener noreferrer">
                  Abrir Formulario
                  <ExternalLink className="size-3.5" data-icon="inline-start" />
                </a>
              </Button>
            </div>

            {/* Link 2: Listado de Personas a Salvo */}
            <div className="flex flex-col justify-between p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors gap-3">
              <div className="flex items-start gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ClipboardList className="size-5" />
                </div>
                <div className="flex flex-col gap-1 font-sans">
                  <h4 className="text-sm font-semibold text-foreground">2. Listado de Personas a Salvo</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Consulta la base de datos pública con el listado de personas confirmadas como seguras.
                  </p>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="w-full text-xs font-semibold border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 mt-2">
                <a href="https://docs.google.com/spreadsheets/placeholder1" target="_blank" rel="noopener noreferrer">
                  Ver Listado de Confirmados
                  <ExternalLink className="size-3.5" data-icon="inline-start" />
                </a>
              </Button>
            </div>

            {/* Link 3: Reportar Persona por Localizar */}
            <div className="flex flex-col justify-between p-4 rounded-xl border border-destructive/10 bg-destructive/5 hover:bg-destructive/10 transition-colors gap-3">
              <div className="flex items-start gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive shrink-0">
                  <UserPlus className="size-5" />
                </div>
                <div className="flex flex-col gap-1 font-sans">
                  <h4 className="text-sm font-semibold text-foreground">3. Reportar Persona por Localizar (Formulario)</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Registra los datos de un familiar o conocido con quien no has podido establecer contacto.
                  </p>
                </div>
              </div>
              <Button asChild size="sm" className="w-full text-xs font-semibold bg-destructive hover:bg-destructive/90 text-white mt-2">
                <a href="https://forms.gle/placeholder2" target="_blank" rel="noopener noreferrer">
                  Registrar Solicitud
                  <ExternalLink className="size-3.5" data-icon="inline-start" />
                </a>
              </Button>
            </div>

            {/* Link 4: Listado de Personas por Localizar */}
            <div className="flex flex-col justify-between p-4 rounded-xl border border-destructive/10 bg-destructive/5 hover:bg-destructive/10 transition-colors gap-3">
              <div className="flex items-start gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive shrink-0">
                  <Search className="size-5" />
                </div>
                <div className="flex flex-col gap-1 font-sans">
                  <h4 className="text-sm font-semibold text-foreground">4. Listado de Personas por Localizar</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Consulta el listado de personas reportadas como no localizadas por sus seres queridos.
                  </p>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="w-full text-xs font-semibold border-destructive/20 text-destructive hover:bg-destructive/10 mt-2">
                <a href="https://docs.google.com/spreadsheets/placeholder2" target="_blank" rel="noopener noreferrer">
                  Ver Base de Datos de Búsquedas
                  <ExternalLink className="size-3.5" data-icon="inline-start" />
                </a>
              </Button>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

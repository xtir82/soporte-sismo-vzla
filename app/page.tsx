import * as React from "react"
import Link from "next/link"
import { 
  HeartHandshake, 
  Search, 
  UserCheck, 
  MapPin, 
  PhoneCall, 
  ShieldAlert, 
  Building2, 
  BookOpen, 
  ArrowRight,
  Info,
  ClipboardList,
  UserPlus,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-6 sm:p-10 lg:p-12">
        <div className="absolute top-0 right-0 -z-10 size-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 size-72 bg-amber-500/5 rounded-full blur-2xl" />
        
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-destructive"></span>
            </span>
            Portal de Emergencia Activo
          </div>
          
          <h1 className="text-3xl/10 font-bold tracking-tight text-foreground sm:text-5xl/14">
            Portal de Apoyo Terremoto Venezuela
          </h1>
          
          <p className="text-base/7 text-muted-foreground sm:text-lg/8">
            Plataforma abierta y ciudadana para facilitar la localización de personas, coordinar el acopio de suministros y proporcionar información verificada para las comunidades afectadas.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <a href="#buscar-personas">
                Encontrar Personas
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/centros-de-acopio">
                Ver Centros de Acopio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Element: Quick Emergency Contact Strip */}
      <section className="border border-border/80 rounded-xl bg-card p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-500 shrink-0">
            <PhoneCall className="size-6" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Líneas de Atención de Emergencia</h3>
            <p className="text-xs text-muted-foreground">Números de respuesta inmediata para rescate y asistencia médica.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <a 
            href="tel:911" 
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-destructive bg-destructive/10 text-destructive hover:bg-destructive/15 px-4 py-2.5 text-sm font-semibold transition-colors"
          >
            <span>Llamar al 911</span>
          </a>
          <a 
            href="tel:08007248454" 
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 text-foreground hover:bg-muted px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <span>Protección Civil: 0800-7248454</span>
          </a>
        </div>
      </section>

      {/* Primary Section: Encontrar Personas (Card with 4 Links) */}
      <section id="buscar-personas" className="flex flex-col gap-6 scroll-mt-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl/8 font-bold tracking-tight text-foreground sm:text-2xl/9 flex items-center gap-2">
            <Search className="size-6 text-destructive" />
            Búsqueda y Reporte de Personas
          </h2>
          <p className="text-sm/6 text-muted-foreground max-w-2xl">
            Acceso a los formularios y bases de datos consolidados para reportar el estado de personas o buscar familiares en las zonas afectadas.
          </p>
        </div>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2 font-sans">
              <ClipboardList className="size-5 text-destructive" />
              Canales de Registro y Consulta de Personas
            </CardTitle>
            <CardDescription className="text-xs"> 
              Seleccione una opción para registrar información o buscar en los listados coordinados por la comunidad. Se actualizara pronto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            </div>
          </CardContent>
        </Card>
      </section>

      {/* Secondary Quick Navigation / Services Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
        {/* Centros de Acopio Box */}
        <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <Building2 className="size-5" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-foreground text-base">Centros de Acopio Verificados</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Consulte la ubicación, horarios y tipos de insumos prioritarios requeridos (medicinas, alimentos no perecederos, agua, cobijas) en los puntos de recolección oficiales en todo el país.
            </p>
            <Link href="/centros-de-acopio" className="text-xs font-semibold text-destructive hover:underline inline-flex items-center gap-1 mt-1">
              Ver lista de centros
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* Informacion Util Box */}
        <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <BookOpen className="size-5" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-foreground text-base">Guías e Información Útil</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Instrucciones vitales sobre qué hacer después de un sismo, cómo evaluar grietas estructurales en hogares y números clave de apoyo psicológico e institucional.
            </p>
            <Link href="/informacion-util" className="text-xs font-semibold text-destructive hover:underline inline-flex items-center gap-1 mt-1">
              Leer guías de seguridad
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Information Banner (Verification and Community effort) */}
      <section className="rounded-xl bg-muted/40 p-4 border border-border/60 flex gap-3 items-start">
        <Info className="size-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <h4 className="text-xs font-semibold text-foreground">Aviso de seguridad de datos</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Las herramientas de búsqueda se basan en información enviada por voluntarios civiles y son administradas con estricto respeto a la privacidad. Si ingresa información errónea o desea eliminar un reporte, por favor contáctenos a través de nuestro canal de <Link href="/contacto" className="underline hover:text-foreground">Contacto</Link>.
          </p>
        </div>
      </section>
      
    </div>
  )
}

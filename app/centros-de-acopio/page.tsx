import * as React from "react"
import Link from "next/link"
import { Building2, Search, MapPin, AlertCircle, Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CentrosDeAcopioPage() {
  const regions = [
    { name: "Caracas - Distrito Capital", activePoints: 0, status: "En preparación - Mapeando ubicaciones" },
    { name: "Valencia - Carabobo", activePoints: 0, status: "En preparación - Mapeando ubicaciones" },
    { name: "Maracay - Aragua", activePoints: 0, status: "En preparación - Mapeando ubicaciones" },
    { name: "Barquisimeto - Lara", activePoints: 0, status: "En preparación - Mapeando ubicaciones" },
  ]

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
          <Building2 className="size-8 text-destructive" />
          Centros de Acopio
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Directorio de centros oficiales y comunitarios autorizados para recibir agua, medicamentos, alimentos y ropa.
        </p>
      </div>

      {/* Info Warning Card */}
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="flex gap-3 py-4">
          <AlertCircle className="size-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400">Verificación en Proceso</h4>
            <p className="text-xs text-amber-700/90 dark:text-amber-400/80 leading-relaxed">
              Estamos validando la logística y la seguridad de cada punto de acopio con las autoridades y ONGs locales para evitar la saturación y garantizar que la ayuda llegue a su destino. Los puntos se publicarán a continuación.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search Input Placeholder */}
      <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Buscar por ciudad, estado o insumo..." 
          disabled
          className="w-full h-10 rounded-lg border border-border bg-muted/30 pl-9 pr-4 text-sm opacity-60 cursor-not-allowed outline-hidden"
        />
      </div>

      {/* States List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regions.map((region, idx) => (
          <Card key={idx} className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">{region.name}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                <MapPin className="size-3.5" />
                {region.status}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground border-t border-border/60 pt-3 flex items-center justify-between">
                <span>Puntos activos: <strong className="text-foreground">{region.activePoints}</strong></span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Proximamente
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report a point */}
      <Card className="border-dashed border-border/80">
        <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-foreground text-sm">¿Representas a un centro de acopio u organización?</h3>
            <p className="text-xs text-muted-foreground">Regístralo en nuestro sistema para verificarlo y publicarlo en el directorio.</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/contacto">
              Registrar Centro
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Building2, Search, MapPin, AlertCircle, ArrowLeft, Home, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CentrosDeAcopioPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeTab, setActiveTab] = React.useState<"acopios" | "refugios">("acopios")

  const regions = [
    { name: "Caracas - Distrito Capital", activePoints: 16, activeRefugios: 5, status: "Información verificada disponible" },
    { name: "Valencia - Carabobo", activePoints: 0, activeRefugios: 0, status: "En preparación - Mapeando ubicaciones" },
    { name: "Maracay - Aragua", activePoints: 0, activeRefugios: 0, status: "En preparación - Mapeando ubicaciones" },
    { name: "Barquisimeto - Lara", activePoints: 0, activeRefugios: 0, status: "En preparación - Mapeando ubicaciones" },
  ]

  const caracasAcopios = [
    "Plaza del Rectorado de la Universidad Central de Venezuela",
    "Plaza Los Palos Grandes Altamira",
    "Parroquia San Miguel Arcángel - El Cementerio",
    "Universidad Monte Ávila: Sede Boleíta Norte y Sede Lomas del Sol",
    "Parroquia Corpus Christi - La Urbina",
    "Parroquia San Rafael - Palo Verde",
    "Colegio San Agustín UD4 Caricuao",
    "Banco Digital de Trabajadores (Sucursales: Quinta Crespo, San Martín, San Bernardino, El Hatillo, Los Palos Grandes, Av. Universidad, Torre Domus, Oficina Principal, Maripérez, Av. Páez del Paraíso, Av. Presidente Medina, Plaza Bolívar, Sabana Grande)",
    "Parroquia El Buen Pastor (Secretariado de Pastoral Juvenil de Caracas) Bello Campo - Altamira",
    "Parroquia Buen Consejo - Caricuao",
    "Parroquia San Vicente de Paul - El Cementerio",
    "Centro Nacional de Acción Social Por La Música",
    "Parroquia Nuestra Señora de la Paz - Montalbán",
    "Iglesia Nuestra Señora de Chiquinquirá - La Florida",
    "Plaza de Toros - Nuevo Circo",
    "Supermercado Páramo (Cualquier sucursal)"
  ]

  const caracasRefugios = [
    "U.E.N. Francisco Pimentel - Quinta Crespo",
    "U.E.N. Gran Colombia - Av. Roosevelt, El Cementerio",
    "Escuela Luis Alberto Hurtado (Km 12 - El Junquito)",
    "Parque Alí Primera (Parque del Oeste) - Gato Negro",
    "Parque Generalísimo Francisco de Miranda (Parque del Este) - Miranda"
  ]

  const filteredAcopios = caracasAcopios.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredRefugios = caracasRefugios.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
          <Building2 className="size-8 text-primary" />
          Centros de Acopio y Refugios
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Directorio de centros de recepción de insumos y puntos de refugio temporal habilitados ante la contingencia sísmica.
        </p>
      </div>

      {/* Info Warning Card */}
      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardContent className="flex gap-3 py-4">
          <AlertCircle className="size-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-400 font-sans">Información en Actualización</h4>
            <p className="text-xs text-blue-700/90 dark:text-blue-400/80 leading-relaxed font-sans">
              Los puntos para Caracas se encuentran confirmados y listados abajo. Para otras regiones, estamos validando la logística y seguridad con las organizaciones civiles locales antes de publicarlos.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* States Overview List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((region, idx) => (
          <Card key={idx} className={`border-border bg-card ${idx === 0 ? "ring-2 ring-primary/20" : ""}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold font-sans">{region.name}</CardTitle>
              <CardDescription className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1 font-sans">
                <MapPin className="size-3" />
                {region.status}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-[11px] text-muted-foreground border-t border-border/60 pt-3 flex flex-col gap-1 font-sans">
                <div className="flex justify-between">
                  <span>Centros de Acopio:</span>
                  <strong className="text-foreground">{region.activePoints}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Refugios:</span>
                  <strong className="text-foreground">{region.activeRefugios}</strong>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center border-t border-border pt-6 mt-2">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === "acopios" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("acopios")}
            className="text-xs font-semibold"
          >
            <Building2 className="size-4" />
            Centros de Acopio (Caracas)
          </Button>
          <Button 
            variant={activeTab === "refugios" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("refugios")}
            className="text-xs font-semibold"
          >
            <Home className="size-4" />
            Refugios Habilitados (Caracas)
          </Button>
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por nombre o zona..." 
            className="w-full h-9 rounded-lg border border-border bg-card pl-9 pr-4 text-xs outline-hidden focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* Caracas Detailed Lists */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold flex items-center gap-2 font-sans">
            {activeTab === "acopios" ? (
              <>
                <Building2 className="size-5 text-primary" />
                Listado de Centros de Acopio
              </>
            ) : (
              <>
                <Home className="size-5 text-primary" />
                Listado de Refugios Habilitados
              </>
            )}
          </CardTitle>
          <CardDescription className="text-xs font-sans">
            Ubicaciones oficiales recolectando insumos prioritarios o prestando albergue en el Distrito Capital y zonas metropolitanas.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {activeTab === "acopios" ? (
            filteredAcopios.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredAcopios.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                    <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted-foreground text-center py-6">No se encontraron centros de acopio que coincidan con la búsqueda.</p>
            )
          ) : (
            filteredRefugios.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredRefugios.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                    <Home className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted-foreground text-center py-6">No se encontraron refugios que coincidan con la búsqueda.</p>
            )
          )}
        </CardContent>
      </Card>

      {/* Report a point */}
      <Card className="border-dashed border-border/80">
        <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <div className="flex flex-col gap-1 font-sans">
            <h3 className="font-semibold text-foreground text-sm">¿Deseas reportar un nuevo centro de acopio o refugio?</h3>
            <p className="text-xs text-muted-foreground">Escríbenos directamente para validar la información y agregarla a este listado público.</p>
          </div>
          <Button asChild variant="outline" size="sm" className="text-xs font-semibold">
            <Link href="/contacto">
              Contactar con el Equipo
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

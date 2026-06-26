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
    { name: "Caracas - Distrito Capital", activePoints: 17, activeRefugios: 5 },
    { name: "Mérida - Mérida", activePoints: 2, activeRefugios: 0 },
    { name: "La Guaira - La Guaira", activePoints: 0, activeRefugios: 1 },
    { name: "Valencia - Carabobo", activePoints: 2, activeRefugios: 0 },
    { name: "Maracay - Aragua", activePoints: 2, activeRefugios: 0 },
    { name: "Ciudad Bolívar - Bolívar", activePoints: 1, activeRefugios: 0 },
    { name: "Barquisimeto - Lara", activePoints: 2, activeRefugios: 0 },
    { name: "Anzoátegui", activePoints: 2, activeRefugios: 0 },
    { name: "Miranda", activePoints: 1, activeRefugios: 0 },
    { name: "Monagas", activePoints: 1, activeRefugios: 0 },
    { name: "Táchira", activePoints: 1, activeRefugios: 0 },
    { name: "Zulia", activePoints: 1, activeRefugios: 0 },
    { name: "Falcón", activePoints: 1, activeRefugios: 0 },
  ]

  const caracasAcopios = [
    "Terrazas del Club Hípico, Caracas. Centro de acopio de Rotaract Caracas.",
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

  const meridaAcopios = [
    "Colegio de Médicos de Mérida habilitó su sede como centro de acopio.",
    "Municipio Alberto Adriani: Entrada del Primero de Mayo, sector La Gallera. Atendido por la parroquia Rómulo Gallegos. Horario: Viernes 11:00 am a 7:00 pm; Sábado y domingo desde las 8:00 am. Reciben: Agua potable, alimentos no perecederos, insumos médicos, ropa y abrigos."
  ]

  const araguaAcopios = [
    "Avenida 19 de Abril, Centro Comercial La Capilla, piso 1, local 21. Centro de acopio del Comando ConVzla.",
    "Paseo de la Libertad, avenida Las Delicias, frente al Centro Médico de Maracay. Centro de acopio de Voluntad Popular."
  ]

  const bolivarAcopios = [
    "Esquina de Banesco, avenida República, municipio Angostura del Orinoco. Centro de acopio de Voluntad Popular."
  ]

  const caraboboAcopios = [
    "Avenida Monseñor Adams, El Viñedo, edificio Talislandia, mezzanina. Centro de acopio del Comando ConVzla y de la Operación Todos con Venezuela.",
    "Sede del Cuerpo de Bomberos (Carretera Nacional Guacara)."
  ]

  const laraAcopios = [
    "Tatas Food, carrera 15 entre calles 13A y 13B, Barquisimeto. Centro de acopio para recibir ayuda destinada a los afectados.",
    "Sede principal de Caritas en Carrera 18, entre calles 34 y 35, Barquisimeto."
  ]

  const anzoateguiAcopios = [
    "CC. Forum Plaza en Lechería",
    "Plaza de Puerto Príncipe"
  ]

  const mirandaAcopios = [
    "Cuarta avenida de Altamira, entre novena y décima transversal, quinta El Bejucal. Centro de acopio del Comando ConVzla."
  ]

  const monagasAcopios = [
    "Calle 6, antigua Bermúdez, casa N.º 11 (antiguo restaurante El Oeste), Maturín. Centro de acopio de Voluntad Popular Monagas."
  ]

  const tachiraAcopios = [
    "Núcleo Táchira de la Universidad de Los Andes (ULA). Centro de acopio habilitado por la ULA Táchira."
  ]

  const zuliaAcopios = [
    "Sede regional de Un Nuevo Tiempo (UNT Zulia). Centro de acopio habilitado por UNT Zulia."
  ]

  const falconAcopios = [
    "Sede del Colegio Nacional de Periodistas (CNP) de Paraguaná."
  ]

  const caracasRefugios = [
    "U.E.N. Francisco Pimentel - Quinta Crespo",
    "U.E.N. Gran Colombia - Av. Roosevelt, El Cementerio",
    "Escuela Luis Alberto Hurtado (Km 12 - El Junquito)",
    "Parque Alí Primera (Parque del Oeste) - Gato Negro",
    "Parque Generalísimo Francisco de Miranda (Parque del Este) - Miranda"
  ]

  const laGuairaRefugios = [
    "Estadio Jorge Luis García Carneiro"
  ]

  const normalizeStr = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  }

  const filteredAcopios = caracasAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Caracas - Distrito Capital").includes(normalizeStr(searchQuery))
  )

  const filteredMeridaAcopios = meridaAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Mérida - Mérida").includes(normalizeStr(searchQuery))
  )

  const filteredAraguaAcopios = araguaAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Maracay - Aragua").includes(normalizeStr(searchQuery))
  )

  const filteredBolivarAcopios = bolivarAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Ciudad Bolívar - Bolívar").includes(normalizeStr(searchQuery))
  )

  const filteredCaraboboAcopios = caraboboAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Valencia/Guacara - Carabobo").includes(normalizeStr(searchQuery))
  )

  const filteredLaraAcopios = laraAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Barquisimeto - Lara").includes(normalizeStr(searchQuery))
  )

  const filteredAnzoateguiAcopios = anzoateguiAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Anzoátegui").includes(normalizeStr(searchQuery))
  )

  const filteredMirandaAcopios = mirandaAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Miranda").includes(normalizeStr(searchQuery))
  )

  const filteredMonagasAcopios = monagasAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Monagas").includes(normalizeStr(searchQuery))
  )

  const filteredTachiraAcopios = tachiraAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Táchira").includes(normalizeStr(searchQuery))
  )

  const filteredZuliaAcopios = zuliaAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Zulia").includes(normalizeStr(searchQuery))
  )

  const filteredFalconAcopios = falconAcopios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Falcón").includes(normalizeStr(searchQuery))
  )

  const filteredRefugios = caracasRefugios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("Caracas - Distrito Capital").includes(normalizeStr(searchQuery))
  )

  const filteredLaGuairaRefugios = laGuairaRefugios.filter(item =>
    normalizeStr(item).includes(normalizeStr(searchQuery)) ||
    normalizeStr("La Guaira - La Guaira").includes(normalizeStr(searchQuery))
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
        {regions.map((region, idx) => {
          const regionQuery = region.name.includes(" - ") ? region.name.split(" - ")[1] : region.name;
          const isActive = searchQuery.toLowerCase() === regionQuery.toLowerCase();
          
          return (
            <Card 
              key={idx} 
              onClick={() => {
                if (isActive) {
                  setSearchQuery("");
                } else {
                  setSearchQuery(regionQuery);
                  if (regionQuery === "La Guaira") {
                    setActiveTab("refugios");
                  } else {
                    setActiveTab("acopios");
                  }
                }
                document.getElementById("search-filter-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`border-border bg-card cursor-pointer transition-all hover:border-primary/50 hover:shadow-xs active:scale-[0.98] ${
                isActive ? "ring-2 ring-primary border-primary/50" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold font-sans">{region.name}</CardTitle>
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
          );
        })}
      </div>

      {/* Search and Filter Section */}
      <div id="search-filter-section" className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center border-t border-border pt-6 mt-2 scroll-mt-6">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === "acopios" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("acopios")}
            className="text-xs font-semibold"
          >
            <Building2 className="size-4" />
            Centros de Acopio
          </Button>
          <Button 
            variant={activeTab === "refugios" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("refugios")}
            className="text-xs font-semibold"
          >
            <Home className="size-4" />
            Refugios Habilitados
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

      {/* Detailed Lists */}
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
            Ubicaciones oficiales recolectando insumos prioritarios o prestando albergue temporal a los afectados.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {activeTab === "acopios" ? (
            (filteredAcopios.length > 0 || 
             filteredMeridaAcopios.length > 0 || 
             filteredAraguaAcopios.length > 0 ||
             filteredBolivarAcopios.length > 0 ||
             filteredCaraboboAcopios.length > 0 ||
             filteredLaraAcopios.length > 0 ||
             filteredAnzoateguiAcopios.length > 0 ||
             filteredMirandaAcopios.length > 0 ||
             filteredMonagasAcopios.length > 0 ||
             filteredTachiraAcopios.length > 0 ||
             filteredZuliaAcopios.length > 0 ||
             filteredFalconAcopios.length > 0) ? (
              <div className="flex flex-col gap-6">
                {/* Caracas Acopios */}
                {filteredAcopios.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-sans">
                      <MapPin className="size-3 text-primary" /> Caracas - Distrito Capital
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredAcopios.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                          <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Other Regions dynamically rendered */}
                {[
                  { name: "Mérida - Mérida", list: filteredMeridaAcopios },
                  { name: "Maracay - Aragua", list: filteredAraguaAcopios },
                  { name: "Ciudad Bolívar - Bolívar", list: filteredBolivarAcopios },
                  { name: "Valencia/Guacara - Carabobo", list: filteredCaraboboAcopios },
                  { name: "Barquisimeto - Lara", list: filteredLaraAcopios },
                  { name: "Anzoátegui", list: filteredAnzoateguiAcopios },
                  { name: "Miranda", list: filteredMirandaAcopios },
                  { name: "Monagas", list: filteredMonagasAcopios },
                  { name: "Táchira", list: filteredTachiraAcopios },
                  { name: "Zulia", list: filteredZuliaAcopios },
                  { name: "Falcón", list: filteredFalconAcopios },
                ].map((reg) => {
                  if (reg.list.length === 0) return null;
                  return (
                    <div key={reg.name} className="flex flex-col gap-2 border-t border-border/60 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-sans">
                        <MapPin className="size-3 text-primary" /> {reg.name}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {reg.list.map((item, idx) => {
                          if (item.includes("Alberto Adriani")) {
                            return (
                              <li key={idx} className="col-span-1 md:col-span-2 list-none">
                                <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
                                  <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 shrink-0">
                                    <ShieldCheck className="size-6" />
                                  </div>
                                  <div className="flex flex-col gap-3 w-full font-sans">
                                    <div>
                                      <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="font-bold text-foreground text-sm">Centro de Acopio Parroquial</h3>
                                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
                                          Verificado
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        <strong className="text-foreground">Municipio:</strong> Alberto Adriani
                                      </p>
                                    </div>
                                    
                                    <div className="text-xs text-foreground/90 leading-relaxed">
                                      <strong className="text-foreground block mb-0.5">Ubicación:</strong>
                                      Entrada del Primero de Mayo, sector La Gallera, con la atención de los compañeros de la parroquia Rómulo Gallegos.
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-border/60">
                                      <div>
                                        <strong className="text-foreground block mb-1">Horario de Recepción:</strong>
                                        <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground text-[11px]">
                                          <li><strong className="text-foreground/80">Viernes:</strong> 11:00 a. m. a 7:00 p. m.</li>
                                          <li><strong className="text-foreground/80">Sábado y Domingo:</strong> a partir de las 8:00 a. m.</li>
                                        </ul>
                                      </div>
                                      <div>
                                        <strong className="text-foreground block mb-1.5">Insumos Solicitados:</strong>
                                        <div className="flex flex-wrap gap-1.5">
                                          {["Agua Potable", "Alimentos no Perecederos", "Insumos Médicos", "Ropa y Abrigos"].map((tag, idxTag) => (
                                            <span key={idxTag} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-medium">
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          }
                          return (
                            <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                              <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground text-center py-6 font-sans">No se encontraron centros de acopio que coincidan con la búsqueda.</p>
            )
          ) : (
            (filteredRefugios.length > 0 || filteredLaGuairaRefugios.length > 0) ? (
              <div className="flex flex-col gap-6">
                {/* Caracas Refugios */}
                {filteredRefugios.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-sans">
                      <MapPin className="size-3 text-primary" /> Caracas - Distrito Capital
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredRefugios.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                          <Home className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* La Guaira Refugios */}
                {filteredLaGuairaRefugios.length > 0 && (
                  <div className="flex flex-col gap-2 border-t border-border/60 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-sans">
                      <MapPin className="size-3 text-primary" /> La Guaira -La Guaira
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredLaGuairaRefugios.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 p-3 rounded-lg border border-border bg-muted/20 items-start hover:bg-muted/30 transition-colors">
                          <Home className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/90 font-medium leading-relaxed font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground text-center py-6 font-sans">No se encontraron refugios que coincidan con la búsqueda.</p>
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

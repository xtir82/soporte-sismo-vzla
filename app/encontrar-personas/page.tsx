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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
            {/* Card 1: Registro Ciudadano de Desaparecidos */}
            <div className="flex flex-col justify-between gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Search className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground text-sm">Registro Ciudadano de Desaparecidos</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Quienes tengan familiares, amigos o allegados que se encuentren como "desaparecidos", pueden ingresar a este canal externo para consultar la base de datos o reportar a una persona que no haya sido ubicada.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="default" size="sm" className="text-xs font-semibold w-full mt-2">
                <a 
                  href="https://desaparecidosterremotovenezuela.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-1"
                >
                  Ir a la pagina
                  <ExternalLink className="size-3" />
                </a>
              </Button>
            </div>

            {/* Card 2: Venezuela Te Busca */}
            <div className="flex flex-col justify-between gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Search className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground text-sm">Venezuela Te Busca</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Plataforma ciudadana alternativa para el registro, consulta y rastreo de personas reportadas como no ubicadas tras el sismo de 2026.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="default" size="sm" className="text-xs font-semibold w-full mt-2">
                <a 
                  href="https://venezuelatebusca.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-1"
                >
                  Ir a la pagina
                  <ExternalLink className="size-3" />
                </a>
              </Button>
            </div>

            {/* Card 3: Plataforma Hospitales en Venezuela */}
            <div className="flex flex-col justify-between gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Search className="size-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground text-sm">Hospitales en Venezuela</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Buscador y base de datos alternativa para consultar de manera consolidada y unificada el listado de personas ingresadas en centros de salud.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="default" size="sm" className="text-xs font-semibold w-full mt-2">
                <a 
                  href="https://hospitalesenvenezuela.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-1"
                >
                  Ir a la pagina
                  <ExternalLink className="size-3" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hospital and Location Lists */}
      <Card className="border-border bg-card shadow-xs">
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center gap-2 font-sans">
            <ClipboardList className="size-5 text-primary" />
            Listados de Personas Ingresadas (Hospitales y Refugios)
          </CardTitle>
          <CardDescription className="text-xs">
            Carpetas compartidas de Google Drive con fotos de listados oficiales de personas ingresadas o ubicadas en centros médicos y refugios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 font-sans">
            {/* Carpeta Principal Callout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
              <div className="flex gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <ClipboardList className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 text-sm">Carpeta Principal Consolidada</h3>
                  <p className="text-xs text-blue-700/80 dark:text-blue-400/70 leading-relaxed max-w-2xl">
                    Acceso general a todos los listados de hospitales y centros de atención unificados en una sola carpeta de Google Drive.
                  </p>
                </div>
              </div>
              <Button asChild variant="default" size="sm" className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white border-none shrink-0 w-full sm:w-auto">
                <a 
                  href="https://drive.google.com/drive/mobile/folders/1o36ifaRz45kAs5rKzci49aD0mP5JB_YI?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-1"
                >
                  Abrir Carpeta Principal
                  <ExternalLink className="size-3" />
                </a>
              </Button>
            </div>

            {/* Grid for individual locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {[
                {
                  name: "Plataforma Hospitales en Venezuela",
                  desc: "Buscador y base de datos consolidada para consultar de manera unificada el listado de personas ingresadas.",
                  url: "https://hospitalesenvenezuela.com/"
                },
                {
                  name: "Hospital Domingo Luciani",
                  desc: "Lista de pacientes y personas ingresadas en este centro médico de El Llanito.",
                  url: "https://drive.google.com/drive/u/0/folders/1womt9b3TSngAE31YoYSWowYY930rZPkZ?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ"
                },
                {
                  name: "Hospital Miguel Pérez Carreño",
                  desc: "Listado de personas ingresadas y atendidas en la emergencia de este hospital.",
                  url: "https://drive.google.com/drive/u/0/folders/1GfyUgXJncw1qNKI1qjiceo_hv87IG0Q6?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ"
                },
                {
                  name: "Hospital Universitario (UCV)",
                  desc: "Registro de pacientes y personas ingresadas en el Hospital Universitario de Caracas.",
                  url: "https://drive.google.com/drive/u/0/folders/1A1JTzkBhBU2xT4WdUSHSD8EusPos13IJ?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ"
                },
                {
                  name: "Hospital Vargas de Caracas",
                  desc: "Listados oficiales y reportes de ingreso en el Hospital Vargas.",
                  url: "https://drive.google.com/drive/u/0/folders/15s28bbAxuluxJbe-zb9KNJ_-ywn90qWT?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ"
                },
                {
                  name: "Refugio: Playa Los Cocos",
                  desc: "Listado de personas resguardadas en el Campo de Golf Playa Los Cocos.",
                  url: "https://drive.google.com/drive/u/0/folders/1EByuS5LU7mb8rIKShoOUp0jJzNyHFszT?fbclid=PAb21jcASqrAdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac4L3rKU_GctOdf9gLptAEIYmqXUH3nOphrq2FM02bx0vizjeDRNEPB_Gfg8w_aem_uYaw0qD4G6y0Y8NtQLyfjQ"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between p-4 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold text-foreground text-xs">{item.name}</h4>
                    <p className="text-[11px] text-muted-foreground leading-normal">{item.desc}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="text-[11px] font-semibold w-full mt-3">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-1"
                    >
                      {item.url.includes("drive.google.com") ? "Ver Lista en Drive" : "Abrir Plataforma"}
                      <ExternalLink className="size-3" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

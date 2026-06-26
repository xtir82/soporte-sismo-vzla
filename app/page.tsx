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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-8">
      
      {/* Disclaimer de No-Afiliación */}
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 flex items-start gap-3 shadow-xs">
        <ShieldAlert className="size-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1 font-sans">
          <p className="text-xs font-semibold text-amber-800 dark:text-amber-400">Sitio de Iniciativa Ciudadana Independiente</p>
          <p className="text-[11px] text-amber-700 dark:text-amber-500/90 leading-relaxed">
            Este portal es de carácter estrictamente informativo y colaborativo. <strong>No está asociado, afiliado, patrocinado ni vinculado de ninguna forma a instituciones gubernamentales, ministerios ni ningún ente oficial del Estado venezolano.</strong> La información es recolectada y provista por voluntarios civiles y la propia comunidad.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 p-6 sm:p-10 lg:p-12">
        <div className="absolute top-0 right-0 -z-10 size-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 size-72 bg-amber-500/5 rounded-full blur-2xl" />
        
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
            </span>
            Portal de Apoyo Activo
          </div>
          
          <h1 className="text-3xl/10 font-bold tracking-tight text-foreground sm:text-5xl/14">
            Portal de Apoyo Terremoto Venezuela
          </h1>
          
          <p className="text-base/7 text-muted-foreground sm:text-lg/8">
            Plataforma abierta y ciudadana para facilitar la localización de personas, coordinar el acopio de suministros y proporcionar información verificada para las comunidades afectadas.
          </p>
 
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
      <section className="border border-border/80 rounded-xl bg-card p-6 flex flex-col gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-500 shrink-0">
            <PhoneCall className="size-6" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Líneas de Atención de Emergencia</h3>
            <p className="text-xs text-muted-foreground">Números de respuesta inmediata, bomberos, grupos de rescate y auxilio en el Área Metropolitana de Caracas.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-border/60 pt-6">
          {/* Col 1: Principales y Celulares */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Líneas Nacionales</h4>
              <a 
                href="tel:911" 
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-destructive bg-destructive/10 text-destructive hover:bg-destructive/15 px-4 py-2 text-xs font-semibold transition-colors w-full"
              >
                <span>Llamar al 911</span>
              </a>
              <div className="flex flex-col gap-1 text-[11px] text-muted-foreground p-3 rounded-lg border border-border/60 bg-muted/20">
                <span className="font-semibold text-foreground">Protección Civil:</span>
                <a href="tel:08005588427" className="hover:underline hover:text-primary font-medium text-foreground">0800-LLUVIAS (0800-5588427)</a>
                <span>y el número de emergencia <a href="tel:171" className="hover:underline hover:text-primary font-semibold text-foreground">171</a></span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Desde tu Celular (A Nivel Nacional)</h4>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <a href="tel:911" className="p-2 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/40 hover:text-primary transition-colors flex flex-col gap-0.5">
                  <span className="font-bold text-foreground">Movistar</span>
                  <span>911</span>
                </a>
                <a href="tel:*1" className="p-2 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/40 hover:text-primary transition-colors flex flex-col gap-0.5">
                  <span className="font-bold text-foreground">Movilnet</span>
                  <span>*1</span>
                </a>
                <a href="tel:112" className="p-2 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/40 hover:text-primary transition-colors flex flex-col gap-0.5">
                  <span className="font-bold text-foreground">Digitel</span>
                  <span>112</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 & 3: Caracas y Carabobo */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Caracas */}
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Área Metropolitana de Caracas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Baruta:</span>
                  <a href="tel:02129444411" className="font-semibold text-primary hover:underline">0212 944 44 11</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Sucre:</span>
                  <a href="tel:02122718190" className="font-semibold text-primary hover:underline">0212 271 81 90</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Chacao:</span>
                  <a href="tel:02122679917" className="font-semibold text-primary hover:underline">0212 267 99 17</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">El Hatillo:</span>
                  <a href="tel:02129632211" className="font-semibold text-primary hover:underline">0212 963 22 11</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Miranda:</span>
                  <div className="flex gap-2">
                    <a href="tel:02123836152" className="font-semibold text-primary hover:underline">0212 383 61 52</a>
                    <span className="text-muted-foreground">/</span>
                    <a href="tel:02123837849" className="font-semibold text-primary hover:underline">0212 383 78 49</a>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Libertador:</span>
                  <a href="tel:02126313989" className="font-semibold text-primary hover:underline">0212 631 39 89</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10 sm:col-span-2">
                  <span className="font-medium text-foreground">Distrito Capital:</span>
                  <a href="tel:08002274825" className="font-semibold text-primary hover:underline">0800 227 48 25</a>
                </div>
              </div>
            </div>

            {/* Carabobo */}
            <div className="flex flex-col gap-1.5 border-t border-border/60 pt-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Edo. Carabobo (Valencia y Costa)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10 sm:col-span-2">
                  <span className="font-medium text-foreground text-left">Proteccion Civil Carabobo:</span>
                  <div className="flex gap-2">
                    <a href="tel:02418592171" className="font-semibold text-primary hover:underline">0241 859 2171</a>
                    <span className="text-muted-foreground">/</span>
                    <a href="tel:02418593969" className="font-semibold text-primary hover:underline">859 3969</a>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Proteccion Civil Valencia:</span>
                  <a href="tel:04128274252" className="font-semibold text-primary hover:underline">0412 827 4252</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                  <span className="font-medium text-foreground">Bomberos Pto. Cabello:</span>
                  <a href="tel:02423620445" className="font-semibold text-primary hover:underline">0242 362 0445</a>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10 sm:col-span-2">
                  <span className="font-medium text-foreground text-left">Bomberos Valencia:</span>
                  <div className="flex gap-2 items-center flex-wrap">
                    <a href="tel:04244739197" className="font-semibold text-primary hover:underline">0424 473 9197 <span className="text-[10px] text-muted-foreground font-normal">(Central)</span></a>
                    <span className="text-muted-foreground">/</span>
                    <a href="tel:02418387372" className="font-semibold text-primary hover:underline">0241 838 7372</a>
                    <span className="text-muted-foreground">/</span>
                    <a href="tel:02418320980" className="font-semibold text-primary hover:underline">832 0980</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Aragua, Lara y Falcón */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border/60 pt-3">
              {/* Aragua */}
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Edo. Aragua (Maracay)</h4>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground">Proteccion Civil Aragua:</span>
                    <div className="flex gap-1 flex-col items-end">
                      <a href="tel:02432474940" className="font-semibold text-primary hover:underline">0243 247 4940</a>
                      <a href="tel:02432471778" className="font-semibold text-primary hover:underline">0243 247 1778</a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground">Bomberos:</span>
                    <a href="tel:02432351346" className="font-semibold text-primary hover:underline">0243 235 1346</a>
                  </div>
                </div>
              </div>

              {/* Lara */}
              <div className="flex flex-col gap-1.5 border-t md:border-t-0 md:border-l border-border/60 pt-3 md:pt-0 md:pl-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Edo. Lara (Barquisimeto)</h4>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground text-left">Proteccion Civil Lara:</span>
                    <div className="flex gap-1 flex-col items-end">
                      <a href="tel:02512544889" className="font-semibold text-primary hover:underline">0251 254 4889</a>
                      <a href="tel:02512543965" className="font-semibold text-primary hover:underline">0251 254 3965</a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground text-left">Bomberos:</span>
                    <div className="flex gap-1 flex-col items-end">
                      <a href="tel:02512317475" className="font-semibold text-primary hover:underline">0251 231 7475</a>
                      <a href="tel:02512319131" className="font-semibold text-primary hover:underline">0251 231 9131</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Falcón */}
              <div className="flex flex-col gap-1.5 border-t md:border-t-0 md:border-l border-border/60 pt-3 md:pt-0 md:pl-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Edo. Falcón (Tucacas / Punto Fijo)</h4>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground text-left">Proteccion Civil Falcón:</span>
                    <div className="flex gap-1 flex-col items-end">
                      <a href="tel:02682524449" className="font-semibold text-primary hover:underline">0268 252 4449</a>
                      <a href="tel:02684609422" className="font-semibold text-primary hover:underline">0268 460 9422</a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground text-left">Bomberos Tucacas:</span>
                    <a href="tel:02694145394" className="font-semibold text-primary hover:underline">0269 414 5394</a>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg border border-border/40 hover:bg-muted/10">
                    <span className="font-medium text-foreground text-left">Bomberos Carirubana:</span>
                    <a href="tel:02692458246" className="font-semibold text-primary hover:underline">0269 245 8246</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section: Encontrar Personas (Card with 4 Links) */}
      <section id="buscar-personas" className="flex flex-col gap-6 scroll-mt-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl/8 font-bold tracking-tight text-foreground sm:text-2xl/9 flex items-center gap-2">
            <Search className="size-6 text-primary" />
            Búsqueda y Reporte de Personas
          </h2>
          <p className="text-sm/6 text-muted-foreground max-w-2xl">
            Acceso a los formularios y bases de datos consolidados para reportar el estado de personas o buscar familiares en las zonas afectadas.
          </p>
        </div>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2 font-sans">
              <ClipboardList className="size-5 text-primary" />
              Canales de Registro y Consulta de Personas
            </CardTitle>
            <CardDescription className="text-xs"> 
              Seleccione una opción para registrar información o buscar en los listados coordinados por la comunidad. Se actualizara pronto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 font-sans">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-xl border border-border bg-muted/10 hover:bg-muted/20 transition-colors">
                <div className="flex gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Search className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
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
            <Link href="/centros-de-acopio" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1">
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
            <Link href="/informacion-util" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1">
              Leer guías de seguridad
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* External Portals & Useful Links Section */}
      <section className="flex flex-col gap-6 pt-4 border-t border-border">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl/8 font-bold tracking-tight text-foreground sm:text-2xl/9 flex items-center gap-2">
            <ExternalLink className="size-6 text-primary" />
            Portales de Apoyo y Enlaces de Interés
          </h2>
          <p className="text-sm/6 text-muted-foreground max-w-2xl">
            Iniciativas civiles y herramientas externas aliadas brindando soporte durante la contingencia sísmica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Caracas Ayuda */}
          <div className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-xs transition-shadow">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <HeartHandshake className="size-5" />
            </div>
            <div className="flex flex-col gap-1 font-sans">
              <h3 className="font-semibold text-foreground text-base">Caracas Ayuda</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Plataforma de mapeo y coordinación ciudadana para canalizar solicitudes de auxilio, apoyo logístico e iniciativas de voluntariado.
              </p>
              <a 
                href="https://caracasayuda.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-2 w-fit"
              >
                Visitar caracasayuda.com
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Card 2: SOS Yummy Rides */}
          <div className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-xs transition-shadow">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <PhoneCall className="size-5" />
            </div>
            <div className="flex flex-col gap-1 font-sans">
              <h3 className="font-semibold text-foreground text-base">Yummy Rides SOS</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Canal de soporte especial para la coordinación de traslados de emergencia y asistencia de movilidad logística en zonas críticas.
              </p>
              <a 
                href="https://sos.yummyrides.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-2 w-fit"
              >
                Visitar sos.yummyrides.com
                <ExternalLink className="size-3" />
              </a>
            </div>
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

import * as React from "react"
import Link from "next/link"
import { HeartHandshake, Phone, ShieldAlert, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1: About */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="flex size-8 items-center justify-center rounded-md bg-destructive text-destructive-foreground">
                <HeartHandshake className="size-4" />
              </div>
              <span className="text-base font-bold text-foreground">Soporte Sismo</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              Plataforma ciudadana e independiente de apoyo y coordinación de información ante el sismo en Venezuela.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Secciones</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/centros-de-acopio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Centros de acopio
                </Link>
              </li>
              <li>
                <Link href="/encontrar-personas" className="text-muted-foreground hover:text-foreground transition-colors">
                  Encontrar personas
                </Link>
              </li>
              <li>
                <Link href="/informacion-util" className="text-muted-foreground hover:text-foreground transition-colors">
                  Información útil
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Contacts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Contactos Clave</h3>
            <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Phone className="size-3.5 text-destructive" />
                <span>Emergencias: <a href="tel:911" className="font-semibold text-foreground hover:underline">911</a></span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="size-3.5" />
                <span>Protección Civil: <a href="tel:08007248454" className="text-foreground hover:underline">0800-7248454</a></span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="size-3.5" />
                <span>Bomberos: <a href="tel:171" className="text-foreground hover:underline">171</a> / <a href="tel:02125422444" className="text-foreground hover:underline">0212-5422444</a></span>
              </li>
            </ul>
          </div>

          {/* Col 4: Disclaimer */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <ShieldAlert className="size-3.5 text-amber-500" />
              Aviso Importante
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Este sitio es un esfuerzo colaborativo e independiente. <strong>No está asociado a ninguna institución gubernamental, organismo oficial ni ente del Estado.</strong> La información es provista de forma ciudadana por la comunidad. Verifique siempre con canales oficiales.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Soporte Sismo Venezuela. Creado con fines de ayuda humanitaria y resiliencia.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Link href="/contacto" className="hover:text-foreground flex items-center gap-1">
              <Mail className="size-3.5" />
              Soporte / Reportes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

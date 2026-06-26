import * as React from "react"
import Link from "next/link"
import { BookOpen, ShieldAlert, Heart, Building, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function InformacionUtilPage() {
  const sections = [
    {
      title: "Durante el Sismo",
      icon: ShieldAlert,
      iconColor: "text-amber-600 dark:text-amber-500",
      bgColor: "bg-amber-500/10",
      tips: [
        "Conserve la calma. El pánico puede provocar accidentes.",
        "Aléjese de ventanas, espejos, vidrios y objetos que puedan caer.",
        "Ubíquese en zonas de seguridad previamente establecidas (bajo mesas resistentes o marcos de puertas reforzados).",
        "Si está en la calle, busque un espacio abierto lejos de postes eléctricos, árboles y fachadas."
      ]
    },
    {
      title: "Después del Sismo",
      icon: CheckCircle2,
      iconColor: "text-emerald-600 dark:text-emerald-500",
      bgColor: "bg-emerald-500/10",
      tips: [
        "Verifique si hay lesionados y no mueva a personas gravemente heridas a menos que haya peligro inminente.",
        "Cierre inmediatamente las llaves de gas y corte la electricidad.",
        "Use el teléfono celular únicamente para emergencias para evitar saturar las redes.",
        "Manténgase informado a través de radios a pilas y canales de información oficiales."
      ]
    },
    {
      title: "Evaluación Estructural de Viviendas",
      icon: Building,
      iconColor: "text-blue-600 dark:text-blue-500",
      bgColor: "bg-blue-500/10",
      tips: [
        "Revise si las grietas están en las paredes divisorias (mampostería) o en vigas y columnas de carga.",
        "Las grietas diagonales (a 45 grados) en columnas de concreto representan peligro estructural severo.",
        "Si escucha crujidos o nota inclinaciones notorias en la estructura, desaloje la propiedad de inmediato.",
        "Solicite asistencia técnica a Protección Civil para evaluaciones formales."
      ]
    },
    {
      title: "Apoyo y Contención Psicológica",
      icon: Heart,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      tips: [
        "Es normal sentir miedo, ansiedad e hiperventilación. Respire profundamente por la nariz y exhale lento.",
        "Evite la sobreexposición a imágenes repetitivas del desastre en redes sociales.",
        "Hable con sus familiares e hijos pequeños sobre lo sucedido, validando sus emociones.",
        "Consulte con psicólogos voluntarios de la Cruz Roja y la Federación de Psicólogos de Venezuela."
      ]
    }
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
          <BookOpen className="size-8 text-primary" />
          Información Útil
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Guías básicas de autoprotección, primeros auxilios y recomendaciones logísticas verificadas ante contingencias sísmicas.
        </p>
      </div>

      {/* Grid of sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => {
          const Icon = section.icon
          return (
            <Card key={idx} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <div className={`flex size-10 items-center justify-center rounded-lg ${section.bgColor} ${section.iconColor} shrink-0`}>
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
                  {section.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex gap-2 items-start leading-relaxed">
                      <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Support Numbers Box */}
      <Card className="border-dashed border-border">
        <CardContent className="py-6 flex flex-col gap-4">
          <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
            Servicio de Orientación Psicológica Telefónica
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Diversas organizaciones y universidades han habilitado líneas telefónicas gratuitas de primeros auxilios psicológicos para afectados y familiares.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold text-foreground">
            <span className="inline-flex items-center gap-1">
              📞 Cruz Roja Venezolana: <a href="tel:02125714444" className="text-primary hover:underline">0212-5714444</a>
            </span>
            <span className="inline-flex items-center gap-1">
              📞 FPV (Psicólogos): <a href="tel:02122396112" className="text-primary hover:underline">0212-2396112</a>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

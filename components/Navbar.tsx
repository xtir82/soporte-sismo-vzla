"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/centros-de-acopio", label: "Centros de acopio" },
  { href: "/encontrar-personas", label: "Encontrar personas" },
  { href: "/informacion-util", label: "Información útil" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
      {/* Red/Yellow Emergency Banner Stripe */}
      <div className="h-1 w-full bg-linear-to-r from-red-600 via-amber-500 to-blue-600" />
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-90">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartHandshake className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-3 text-foreground sm:text-base">Soporte Sismo</span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">Venezuela</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Urgent Action / Contact Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <a href="tel:911">
              Emergencias: 911
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button asChild size="sm" variant="outline" className="text-destructive border-destructive/20 hover:bg-destructive/10">
            <a href="tel:911">911</a>
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                    isActive ? "bg-muted text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-border pt-4">
              <Button asChild className="w-full justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <a href="tel:911">Emergencias 911</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

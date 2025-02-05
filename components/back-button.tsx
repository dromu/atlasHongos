"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname() // Obtiene la ruta actual

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        if (pathname.startsWith("/fungus/")) {
          router.push("/explore") // Si está en /fungus/ID, va a /explore
        } else if (pathname === "/explore" || pathname === "/author" || pathname === "/prologue" || pathname === "/agradecimientos") {
          router.push("/") // Si está en explore, author, prologue o gracias, va al inicio
        } else if (window.history.length > 1) {
          router.back() // Si hay historial, regresa normalmente
        } else {
          router.push("/") // Si no hay historial, va al inicio
        }
      }}
      className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
    </Button>
  )
}

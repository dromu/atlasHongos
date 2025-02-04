import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <Button asChild variant="outline" size="sm" className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
      <Link href="/">
        <ArrowLeft className="mr-2 h-4 w-4" /> Regresar al Inicio
      </Link>
    </Button>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => router.back()}
      className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
    </Button>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function DedicationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Dedicatoria</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-foreground">Aquí puedes incluir la dedicatoria del Atlas de Hongos Macromicetos.</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Volver a la Página Principal
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


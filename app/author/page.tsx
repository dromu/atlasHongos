import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function AuthorPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sobre el Autor</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">Aquí puedes incluir información sobre el autor del Atlas de Hongos Macromicetos.</p>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Volver a la Página Principal
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


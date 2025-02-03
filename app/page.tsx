import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-primary">Atlas de Hongos Macromicetos</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl mb-8 text-foreground">
            Explora nuestra colección de hongos macromicetos. Descubre sus características, hábitats y más.
          </p>


          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/explore">Explorar Hongos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/author">Autor</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/prologue">Prólogo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/dedication">Dedicatoria</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}


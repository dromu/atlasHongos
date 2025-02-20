import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-primary">Atlas de Hongos Macromicetos</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          

          {/* Agregar imagen aquí */}
          <img
            src="/images/general/inicio.jpg" 
            alt="Imagen representativa de hongos"
            className="w-1/2 h-auto mb-8 mx-auto"
          />

          <p className="text-xl mb-8 text-foreground">
          Descripción de los hongos de interés biocultural por el pueblo Kokonuko del municipio de Puracé (2019-2022)
          </p>

          <p className="text-xl mb-1 text-foreground font-bold">
            PhD. FABIOLA EUGENIA GONZALEZ CUELLAR
          </p>

          {/* <p className="text-xl mb-1 text-foreground font-bold">
            Eng. JADER ALEJANDRO MUÑOZ GALINDEZ
          </p> */}


          <p className="text-xl mb-8 text-foreground">
            Universidad del Cauca 
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/explore">Explorar Hongos</Link>
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/author">Autor</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/prologue">Prólogo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/dedication">Dedicatoria</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/agradecimientos">Agradecimientos</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}


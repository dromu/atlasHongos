import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function ProloguePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Prólogo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-1 text-foreground text-justify mx-auto max-w-2xl">Para Colombia actualmente se registran 7.619 especies de hongos: 4,818 del
                                              phylum Ascomycota, seguido del phylum Basidiomycota con 2,555 especies
                                              (Charria-G et al., 2023).</p>

          <p className="mb-1 text-foreground text-justify mx-auto max-w-2xl">Durante los años 2019 a 2022 en el resguardo de Puracé-Cauca, a través de la
                                              investigación participativa etnomicológica, se entrevistaron 42 sabedores quienes
                                              hacen uso medicinal y/o alimenticio de hongos silvestres. Se estimo que la
                                              abundancia percibida de hongos silvestres por los comuneros en el territorio fue
                                              de moderada en un 41,3% y escasa 24.7%, aspecto ecológico asociado a las
                                              transformaciones del territorio, deforestación de los bosques, uso de pesticidas y
                                              desechos de azufre que causaron contaminación de los suelos y fuentes de agua,
                                              además del cambio climático. </p>
          <p className="mb-6 text-foreground text-justify mx-auto max-w-2xl">En los recorridos de campo en el territorio del resguardo de Puracé se encontraron
                                              42 hongos silvestres de interés biocultural. La comunidad del pueblo Kokonuko les
                                              da nombres comunes dependiendo de los sustratos donde los observan, en
                                              relación con los espíritus del territorio y al parecido con otros elementos
                                              Referente a la importancia biocultural: en frecuencia en mención, el primer lugar
                                              fue para los “hongos de la boñiga” (Panaeolus fimicola y Psylocibe cubensis) de
                                              utilidad ecológica, seguidos del “pedo de duende o pedorro” (Lycoperdon sp.), este
                                              ocupo el primer lugar en orden de mención, usado en la medicina tradicional para
                                              detener el sangrado. Respecto a hongos de uso alimenticio se reportaron las
                                              “kallambas u orejas de palo blancas” (Pleurotus djamor, Lentinus scleropus y
                                              Pluteus cervinus).</p>
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


import { getAllFungi } from "@/lib/api"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

export default async function ExplorePage() {
  const fungi = await getAllFungi()

  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8 text-primary">DESCRIPCIÓN DE LOS HONGOS DE INTERÉS BIOCULTURAL POR EL PUEBLO KOKONUKO DEL MUNICIPIO DE PURACÉ (2019-2022)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fungi.map((fungus) => (
          <Link key={fungus.id} href={`/fungus/${fungus.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">{fungus.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted italic mb-2">{fungus.scientificName}</p>
                {/* <p className="text-sm text-foreground">{fungus.description.substring(0, 100)}...</p> */}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


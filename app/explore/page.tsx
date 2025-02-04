import { getAllFungi } from "@/lib/api"
import FungusCard from "@/components/fungus-card"
import { BackButton } from "@/components/back-button"

export default async function ExplorePage() {
  const fungi = await getAllFungi()

  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8 text-primary">DESCRIPCIÓN DE LOS HONGOS DE INTERÉS BIOCULTURAL POR EL PUEBLO KOKONUKO DEL MUNICIPIO DE PURACÉ (2019-2022)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols- gap-6">
        {fungi.map((fungus) => (
          <FungusCard key={fungus.id} fungus={fungus}  />
        ))}
      </div>
    </div>
  )
}


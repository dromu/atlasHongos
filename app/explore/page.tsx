import { getAllFungi } from "@/lib/api"
import FungusCard from "@/components/fungus-card"
import { BackButton } from "@/components/back-button"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"


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

      <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
  <Link href="/">
    <Home className="mr-2 h-10 w-10" /> Volver a la Página Principal
  </Link>
</Button>

    </div>
    
        
    

  )
  

}


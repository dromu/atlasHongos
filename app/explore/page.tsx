import { getAllFungi } from "@/lib/api"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"




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
                
                <CardTitle style={{ color: "#404040" }}>Colección {fungus.id}</CardTitle>
                <CardTitle className="text-primary">{fungus.name}</CardTitle>
                
              </CardHeader>
              <CardContent>
  
                <p className="text-muted italic mb-2">{fungus.scientificName}</p>
                
              </CardContent>

              
              
            </Card>

            
          </Link>

          
        ))}
        
      </div>

    
      <CardContent className="mt-4"> {/* Agrega margen superior al contenedor del botón */}
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Volver a la Página Principal
          </Link>
        </Button>
      </CardContent>
      
    </div>
    
  )
}


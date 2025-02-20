import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import type { Fungus } from "@/types/fungus"

interface FungusCardProps {
  fungus: Fungus
 
}



export default function FungusCard({ fungus}: FungusCardProps) {
  
  return (
    <Link href={`/fungus/${fungus.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-4">
          <div className="flex flex-col">
            <div className="flex mb-2">
              <div className="flex-grow">
              <p className="text-xs text-primary mt">Colección {fungus.id}</p>
                {/* <CardTitle className="text-xl font-semibold mb-2 italic">{fungus.name}</CardTitle> */}


                <CardTitle className="text-xl font-semibold mb-2 italic">
                  {fungus.name} <span className="not-italic text-xl font-semibold mb-2">{fungus.autorFecha}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{fungus.scientificName.substring(0, 100)}...</p>
                
              </div>
              <div className="ml-4 w-24 h-24 relative overflow-hidden rounded-md">
                <Image
                  src={fungus.images[0]?.url || "/placeholder.svg"}
                  alt={`${fungus.name} - Imagen principal`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {fungus.images.slice(1, 4).map((image, index) => (
                <div key={index} className="w-12 h-12 relative flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={`${fungus.name} - Imagen ${index + 2}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}


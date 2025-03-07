import { getFungusById } from "@/lib/api"
import { notFound } from "next/navigation"
import ImageGallery from "@/components/image-gallery"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

export default async function FungusPage({ params }: { params: { id: string } }) {
  const fungus = await getFungusById(params.id)

  if (!fungus) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card className="mb-8">
        <CardHeader>
        <CardTitle style={{ color: "#404040" }}>Colección {fungus.id}</CardTitle>
        
        {/* <CardTitle className="text-3xl font-bold text-primary italic">
          {fungus.name} <span className="not-italic text-3xl font-bold text-primary">{fungus.autorFecha}</span>
        </CardTitle> */}

        
        <CardTitle className="text-3xl font-bold text-primary italic">
     
          
          {fungus.name.split(/(\*[^*]+\*)/g).map((part, index) =>
            part.startsWith("*") && part.endsWith("*") ? (
              <span key={index} className="not-italic">{part.slice(1, -1)}</span>
            ) : (
              part
            )
          )}


          <span className="not-italic text-3xl font-semibold mb-2">
            {fungus.autorFecha.split(/(\*[^*]+\*)/g).map((part, index) =>
              part.startsWith("*") && part.endsWith("*") ? (
                <span key={`autor-${index}`} className="italic">{part.slice(1, -1)}</span>
              ) : (
                part
              )
            )}
          </span>
        </CardTitle>


          <p className="text-x  text-muted">{fungus.scientificName}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ImageGallery images={fungus.images} />
            </div>
            <div className="space-y-6">
            <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Fecha de recolección</h3>
                <p className="text-foreground">{fungus.fechaRecol}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Localidad</h3>
                <p className="text-foreground">{fungus.localidad}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Descripción Macroscópica</h3>
                <p className="text-foreground">{fungus.descriptionMacro}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Descripción Microscópica</h3>
                <p className="text-foreground">{fungus.descriptionMicro}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Hábitat</h3>
                <p className="text-foreground">{fungus.habitat}</p>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Nombre común</h3>
                <p className="text-foreground">{fungus.CommonName}</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Uso</h3>
                <p className="text-foreground">{fungus.uso}</p>
              </section>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


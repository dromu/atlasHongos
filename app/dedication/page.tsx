import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function DedicationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Dedicatoria</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-2 text-foreground text-center italic">A la comunidad del pueblo Kokonuko por sus luchas y reivindicaciones en la </p>
        <p className="mb-2 text-foreground text-center italic">conservación y protección de sus saberes ancestrales, al médico tradicional Julio Cesar</p>
        <p className="mb-2 text-foreground text-center italic">Caldon y a los 42 sabedores y sabedoras por hacer uso de los hongos silvestres: Absalon</p>
        <p className="mb-2 text-foreground text-center italic">Escobar, Alejandro Caldon, Ana Marcela Pizo, Ana Romelia Calambas, Ana Zuli Pizo</p>
        <p className="mb-2 text-foreground text-center italic">Bolaños, Argemira Manquillo Isiquita, Carolina Cobo, Carolina Pizzo Cobo, Claudia</p>
        <p className="mb-2 text-foreground text-center italic">Lorena Mompotes, Cristian Alejandro Pizo Bolaños, Cristian Duvan Pizo, Doris Amanda</p>
        <p className="mb-2 text-foreground text-center italic">Quira, Edilma Levasa, Eli Marino Guauña, Franci Elena Lame, Gerardo Bonilla, Gregorio</p>
        <p className="mb-2 text-foreground text-center italic">Aguilar, Harby Leandro Pizo Barona, Isabel Isiquita, Ismaelina Bonilla, Jesika Maria</p>
        <p className="mb-2 text-foreground text-center italic">Mompotes Manguillo, Jesús Homero, Jorge Alirio Manquillo, José Gregorio Quira, Juana</p>
        <p className="mb-2 text-foreground text-center italic">Arce de Bonilla, Kelly Tatiana Aguilar Mompotes, Luz Marina Barona Pizo, María Nelly</p>
        <p className="mb-2 text-foreground text-center italic">Pizo, Neider Yesid Guauña Pizo, Nidia Mompotes Pizo, Nohemi Jalvin, Oscar Daniel Arce</p>
        <p className="mb-2 text-foreground text-center italic">Sanchez, Oswaldo Quilindo, Patricio Alonso Quira, Queimar Mompotes Pizo, Roosevert</p>
        <p className="mb-2 text-foreground text-center italic">Pizo Quira, Rosa María Jalvin, Sebastiana Escobar, Vanessa Silena Pizo, Wilson Alfredo</p>
        <p className="mb-2 text-foreground text-center italic">Aguilar, Yaneth Jimena Manquillo y Yolanda Caldon Mazabuel.</p>

          
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


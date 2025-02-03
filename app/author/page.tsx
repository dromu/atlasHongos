import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function AuthorPage() {
  return (
    <div className="container mx-auto py-5 px-4">
      <BackButton />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Sobre el Autor</CardTitle>
        </CardHeader>
        <CardContent>

        <p className="text-2xl mb-3 text-[#8C1C50] font-bold text-center">
          FABIOLA EUGENIA GONZALEZ CUELLAR
        </p>

          <img
            src="/images/general/fabiolaFoto.png" 
            alt="Imagen representativa de hongos"
            className="w-1/5 h-auto mb-1 mx-auto"
          />


          <p className="text-x mb-1 text-foreground text-center">PhD. Etnobiología y Estudios Bioculturales </p>
          <p className="text-x mb-1 text-foreground text-center">Master Microbiologia Sanitaria</p>
          <p className="text-x mb-1 text-foreground text-center">Magíster  en  Micología  Clínica </p>
          <p className="text-x mb-1 text-foreground text-center">Especialista Salud Familiar</p>
          <p className="text-x mb-1 text-foreground text-center">Bacteriologa y Laboratorista Clinico </p>
          <p className="text-x mb-1 text-foreground text-center">Profesora del Departamento de Medicina Interna</p>
          <p className="text-x mb-2 text-foreground text-center"> Facultad Ciencias de la Salud; Universidad del Cauca.</p>
          
          
          <p className="text-x mb-1 text-foreground font-bold text-center">Correo electrónico</p>
          
          <p className="text-x mb-2 text-foreground text-center"> fegonza@unicauca.edu.co</p>

          <p className="text-x mb-1 text-foreground font-bold text-center">ORCID:</p>
          <p className="text-x mb-1 text-foreground text-center">   
            <a href="https://orcid.org/0000-0003-1575-1619" target="_blank" rel="noopener noreferrer">
             https://orcid.org/0000-0003-1575-1619
            </a>
          </p>

          


          




          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Volver a la Página Principal
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


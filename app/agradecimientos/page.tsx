import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"
import { Home } from "lucide-react"

export default function AgradecimientosPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Agradecimientos</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
            A mis padres que desde otra esfera espiritual me acompañan. A mi hija Laurita por ser mi motivación permanente de nuevos aprendizajes y a mi esposo Carlos Alberto, por su apoyo, colaboración, comprensión y acompañamiento en las salidas de campo.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A los 104 comuneros y a los sabedores y sabedoras del resguardo de Puracé, por su participación en el desarrollo de la investigación, dialogar sobre sus conocimientos tradicionales y su gran interés en la búsqueda de los hongos silvestres.
        </p>
        
        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A mi directora de Tesis, doctora Aida Marcela Vasco-P, por llevarme al maravilloso mundo de los hongos macromicetos y su gran colaboración.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A los profesores del doctorado en Etnobiología y Estudios Bioculturales, Doctores Olga Lucia Sanabria-D, Apolinar Figueroa-C, Javier Tobar, Carlos Enrique Osorio-C, Hugo Portela-G y demás profesores invitados nacionales e internacionales por introducirme a otras ciencias, paradigmas, metodologías de acercamiento al conocimiento tradicional de las comunidades.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A la doctora Adriana Montoya, por todas sus enseñanzas y recorridos etnomicológicos durante mi pasantía en el Centro de Investigaciones en Ciencias Biológicas de la Universidad Autónoma de Tlaxcala-México y al doctor Alejandro Kong por su apoyo en la revisión de la colección de los hongos silvestres. A los dos por su compañía y guía durante el tiempo de estancia en la ciudad de Tlaxcala-México.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A mis queridos compañeros de la II cohorte del doctorado de Etnobiología y Estudios Bioculturales por compartir aprendizajes, viajes académicos, caminatas, risas y comidas tradicionales con las comunidades que tuvimos la oportunidad de visitar.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A mis apreciados compañeros en Etnobiología, Martha Elena Montaño-F, Yohana Orjuela-M, Yordi Werley Polindara-M, Lina María Pérez-S, Lina E Cordoba-A. a Tito Arbey Pito y a los comuneros Oswaldo Quilindo y Carlos Julio Díaz, por su acompañamiento en los talleres y salidas de campo por el resguardo de Puracé.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A los profesores Ever Castro-C, María del Socorro Andrade-M y Fausto M Pizo del Centro Educativo Vueltas de Patico, resguardo de Puracé, por su apoyo como dinamizadores en el dialogo de saberes desarrollado con los padres de familia y los niños. 
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A la profesora Aidé del Socorro Jurado, a los padres de familia y niños del Colegio Manuel María Mosquera de Puracé, por toda su colaboración
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A la comunidad del Centro Educativo Vueltas de Patico, resguardo de Puracé por permitirme ingresar a su proyecto educativo “Hacia la Soberanía Alimentaria y adaptación al cambio climático desde el PEC: La tulpa, con la propuesta del cultivo casero de hongos, además por compartir todo su conocimiento tradicional sobre los hongos silvestres. A los niños por su gran interés y curiosidad sobre los hongos silvestres. Un agradecimiento especial a la señora Esmaelina Bonilla por todo lo enseñado y darme a probar las kallambas.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A Beatriz Yolanda Adrada-G y Cristian Mauricio Lasso-B, por su amistad y acompañamiento en las salidas de campo, arduo trabajo de laboratorio y haber aceptado este reto de aprendizaje mutuo sobre los hongos macromicetos silvestres. 
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        Al profesor Ricardo Benítez-B y al estudiante Leonardo Medina, del programa de Química. Facultad de Ciencias Naturales, Exactas y de la Educación- Universidad del Cauca por la colaboración en los análisis bromatológicos.
        </p>
        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        A María Fernanda Mesías, auxiliar del laboratorio de Microbiología y Parasitología de la Facultad Ciencias de la Salud de la Universidad del Cauca por toda su colaboración.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        Al grupo de investigación Etnobotánicos Latinoamericanos - GELA de la Universidad del Cauca y en especial a los integrantes de los proyectos “Diversidad a nivel local para la conservación biocultural en el departamento del Cauca”- ID 4747” y “La Jigrapucha de la Conservación: Tejiendo vínculos culturales para la conservación de la agrobiodiversidad en el Municipio de Puracé” con ID 4851/VRI-UniCauca-GELA”, y a su coordinadora PhD. Olga Lucía Sanabria D, por incluir la temática de etnomicología en estos proyectos.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        Al jefe del departamento de Medicina Interna doctor William Fernando González Dagua, al Consejo de la Facultad de Ciencias de la Salud y la Vicerrectoría Académica de la Universidad del Cauca, por dar el aval para poder desarrollar mis estudios y salidas de campo.
        </p>

        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        Al doctorado en Etnobiología y Estudios Bioculturales por el apoyo económico, lo cual fue una gran base para poder continuar en mi proceso académico.  
        </p>


        <p className="mb-4 text-foreground text-justify mx-auto max-w-3xl">
        Y finalmente a la Universidad del Cauca por ser mi segunda casa durante tantos años….
        </p>




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


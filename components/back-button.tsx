"use client"; // Asegúrate de agregar esto si es un componente cliente
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={() => router.replace("/")} // Reemplaza la ruta actual sin guardar en el historial
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> Regresar al Inicio
    </Button>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={() => {
        window.location.href = "/";
        window.location.reload(); // Recarga la página para evitar cualquier caché de Next.js
      }}
    >
      <ArrowLeft className="mr-2 h-4 w-4" /> Regresar al Inicio
    </Button>
  );
}

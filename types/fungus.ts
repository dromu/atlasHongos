export interface Fungus {
  id: string
  name: string
  autorFecha: string
  fechaRecol: string
  scientificName: string
  localidad: string
  descriptionMacro: string
  descriptionMicro: string
  CommonName: string
  uso: string
  habitat: string
  // edibility: string
  images: { url: string; caption: string }[]
}


import type { Fungus } from "@/types/fungus"

export async function getAllFungi(): Promise<Fungus[]> {
  // Aquí normalmente harías una llamada a tu API o base de datos
  // Por ahora, devolveremos datos de ejemplo
  return [
    {
      id: "1",
      name: "Ganoderma sp. (sf. Australe) (P.Karst., 1881)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae.",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. basidiocarpo sin estípite, con píleo hasta 17 cm de diámetro y hasta 3 cm de grosor, glabra y consistencia leñosa, color inicia con un café claro(oac644) y la parte más superior café más oscuro(aoc686), el himenóforo de un color crema (aoc717) ",
      descriptionMicro: "Figura B-KOH basidios claviformes, Figura C. basidiosporas elipsoidales de 5 x 10 micras color café con ornamentación tipo ganodermatoides (KOH 100x)." ,
      habitat: "Gregario, crece en madera",
      CommonName: "Oreja de palo duro",
      uso: "Para escribir-ES- ",
      images: [
        { url: "/images/ganoderma sp/Cepa 1.jpg", caption: "Figura A" },
        { url: "/images/ganoderma sp/Cepa 1-6.jpg", caption: "Figura B" },
        { url: "/images/ganoderma sp/Cepa 1-5 (2).jpg", caption: "Figura C" },
      ],
    },

    {
      id: "2",
      name: "Scleroderma citrinum (Bull.) Pers. (1801)",
      scientificName: "Basidiomycota-Agaromycetes-Boletales-Sclerodermataceae",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A-B: sin estípite, gleba o carpóforo globoso de color crema-amarillento, en el interior presenta polvo esporal de color negro.",
      descriptionMicro: "Figura C. esporas: 11 x 11 ųm de color café oscuro espiculadas, amiloides en tinción de Melzer (100x)." ,
      habitat: "Terrestre. Bosque de pino- micorrizogeno",
      CommonName: "Pedo de bruja",
      uso: "Medicinal (hemostático)",
      images: [
        { url: "/images/sclerodermaCitrinum/Scleroderma.jpeg", caption: "Figura A" },
        { url: "/images/sclerodermaCitrinum/Scleroderma.jpg", caption: "Figura B" },
        { url: "/images/sclerodermaCitrinum/002 esporas.jpg", caption: "Figura C" },
      ],
    },

    {
      id: "3",
      name: "Schizophyllum commune (Fr. 1815).",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Schizophyllaceae ",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A-B-C. Basidio unido al sustrato con una pequeña base lateral, color blanco grisáceo, seco y con forma de concha en pliegues, contexto 0,1 cm de grosor café grisáceo. Himenio falsamente lamenado.",
      descriptionMicro: "Figura D. basiodiosporas de 4x2 cilíndricas alantoides (rojo congo-100x), hialinas (KOH-100x), inamiliodes en el reactivo de Melzer." ,
      habitat: "Gregario o dispersos sobre troncos en descomposición.",
      CommonName: "Hongo de palo viejo",
      uso: "No uso por la comunidad",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },

    {
      id: "4",
      name: "Inonoptus sp.  (P. Karst., 1879)",
      scientificName: "Basidiomycota- Agaricomycetes- Hymenochaetales- Hymenochaetaceae",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. basidiocarpo sin estípite, píleo hasta 10 cm de diámetro y hasta 1.0 cm de grosor, consistencia leñosa, color café oscuro(oac639), el himenio es de color marrón claro (aoc679).",
      descriptionMicro: "Figura B-Tinciòn de Melzer: basidiosporas globosa-subglobosa, marrón rojizas, pared gruesa y lisas, de 4x3 micras. Reacción con KOH: positivo (cambia a color negro)." ,
      habitat: "Gregario, crece en madera",
      CommonName: "Oreja de palo duro.",
      uso: "Para escribir-ES-",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },

    {
      id: "5",
      name: "Ganoderma sp. (P.Karst., 1881)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. basidiocarpo sin estípite, píleo hasta 17 cm de diámetro y hasta 3 cm de grosor, consistencia leñosa, color inicia con un café claro(oac644) y la parte más superior café más oscuro(aoc686), el himenio de un color marrón claro (aoc679).",
      descriptionMicro: "Figura B-Tinciòn de Melzer: basidiosporas globosa-subglobosa, marrón rojizas con pared gruesa y lisas, tamaño de espora: 3 x 6 ųm. Hifas degenerativas de pared gruesa con septos simples." ,
      habitat: "Gregario, crece en madera",
      CommonName: "Oreja de palo duro",
      uso: "No uso por la comunidad",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },

    {
      id: "6",
      name: "Scleroderma citrinun(Bull.) Pers. (1801)",
      scientificName: "Basidiomycota-Agaromycetes-Boletales-Sclerodermataceae",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A-B. sin estípite, gleba o carpóforo globoso de color crema-amarillento, en el interior presenta polvo esporal de color negro.",
      descriptionMicro: "Figura C. esporas: 11 x 11 ųm (100x) color café espiculadas, amiloides en tinción de Melzer (100x)." ,
      habitat: "Terrestre, bosque",
      CommonName: "Pedo de bruja",
      uso: "medicinal (hemostático).",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },

    {
      id: "7",
      name: "Psilocybe cubensis (Earle) Singer, 1948).",
      scientificName: "Basidiomycota- Agaricomycetes- Agaricales-Hymenogastraceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. píleo 1.4-5.4 cm de diámetro, campanulado a umbonado, de superficie lisa, húmedo, brillante de color amarillo hacia el centro y más pálido hacia el margen. Cambio a azul con el tacto. Estípite 3.0-8.5 cm de longitud.",
      descriptionMicro: "Figura B-Tinción de Melzer. basidioesporas de 12-20 x 7-10 (100x) de color café lisas de pared gruesa." ,
      habitat: "Gregario, crece en excreta de ganado.",
      CommonName: "Hongo de la boñiga-sombrilla",
      uso: "No uso",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },


    {
      id: "8",
      name: "Lentinus crinitus (L.) Fr., 1825",
      scientificName: "Basidiomycota- Agaricomycetes-Polyporales-Polyporaceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figuras A-B. píleo plano convexo, depreso en el centro a infundibuliforme, consistencia correosa, superficie seca, tamaño: 3,5 -6,5 cm, opaco, escuamalias fibrosas, margen con ornamentación fibriloso decurvado de color crema a café. Contexto: 0,1 cm de grosor, blanco a amarillo pálido. Himenoforo: tipo lamelado en collar color crema. Lamelas 0,1 cm de ancho decurrentes, apretadas de color crema, margen finamente dendiculado. Estípite: 0,5- 0,9 cm de longitud 0,1-0,2 cm de diámetro hacia el ápice, ligeramente excéntrico, cilíndrico a subbulboso, de consistencia correosa, superficie escuamulosa con escuamulas más oscuras, interior blanco a beige, solido. KOH (-).",
      descriptionMicro: "Figura C-KOH: basidiosporas hialinas de 5-9x2 µm" ,
      habitat: "Tronco enterrado en potrero, Hábito: gregario",
      CommonName: "Hongo de palos caídos, podridos, viejos, secos.",
      uso: "No uso",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },


    {
      id: "9",
      name: "Pleurotus djamor. (Fr.) P. Kumm).",
      scientificName: "Basidiomycota- Agaricomycetes- Agaricales- Pleurotaceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. hongo plecrotoide no estipitado con inserción lateral. Píleo: ejemplares con ancho de 1,1 cm a 8,7 cm y largo de 1,8 – 8,2 cm, grosor de 5-10 mm. Forma flabeliforme a pulmonada. Superficie: de cutícula seca, lisa a corrugada, color gris plomo, cuando más seca se torna blancuzco o naranja. Margen crodado y ondulado, contexto blanco de 1- 1,4 mm de grosor, espumoso. Consistencia membranosa- carnosa. Píleo higrafano, con intersección lateral. Himenoforo lamelado, láminas blancas apretadas de 3-6 mm de alto, margen irregular crodada. Láminas desde el margen hasta punto de inserción del basidioma al sustrato. Forma de lámina segmentiforme. Láminas higrofanas, lamelas de 3 series.",
      descriptionMicro: "Figura B. basidiosporas baciliformes hialinas en KOH de 10x3µl (100x).",
      habitat: "Gregario a cespitoso. ",
      CommonName: "kallambas/callambas, orejas de palo",
      uso: "Alimenticio",
      images: [
        { url: "/images/", caption: "Figura A" },
        { url: "/images/", caption: "Figura B" },
        { url: "/images/", caption: "Figura C" },
      ],
    },

    
    // Agrega más hongos según sea necesario
  ]
}

export async function getFungusById(id: string): Promise<Fungus | null> {
  const fungi = await getAllFungi()
  return fungi.find((fungus) => fungus.id === id) || null
}


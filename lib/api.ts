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
        { url: "/images/fungusCol/Cepa 1A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 1B.jpg", caption: "Figura B" },
        { url: "/images/fungusCol/Cepa 1C.jpg", caption: "Figura C" },
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
        { url: "/images/fungusCol/Cepa 2A.jpeg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 2B.jpg", caption: "Figura B" },
        { url: "/images/fungusCol/Cepa 2C.jpg", caption: "Figura C" },
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
        { url: "/images/fungusCol/Cepa 3A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 3B.jpg", caption: "Figura B" },
        { url: "/images/fungusCol/Cepa 3C.jpg", caption: "Figura C" },
        { url: "/images/fungusCol/Cepa 3D.jpg", caption: "Figura D" },
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
        { url: "/images/fungusCol/Cepa 4A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 4B.jpg", caption: "Figura B"  }
        
      ],
    },

    {
      id: "5",
      name: "Ganoderma sp. (P.Karst., 1881)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "05/11/2019",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. basidiocarpo sin estípite, píleo hasta 17 cm de diámetro y hasta 3 cm de grosor, consistencia leñosa, color inicia con un café claro(oac644) y la parte más superior café más oscuro(aoc686), el himenio de un color marrón claro (aoc679).",
      descriptionMicro: "Figura B-Tinción de Melzer: basidiosporas globosa-subglobosa, marrón rojizas con pared gruesa y lisas, tamaño de espora: 3 x 6 ųm. Hifas degenerativas de pared gruesa con septos simples." ,
      habitat: "Gregario, crece en madera",
      CommonName: "Oreja de palo duro",
      uso: "Para escribir-ES",
      images: [
        { url: "/images/fungusCol/Cepa 5A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 5B.jpg", caption: "Figura B"  },
        { url: "/images/fungusCol/Cepa 5C.jpg", caption: "Figura C"  },
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
      uso: "Medicinal (hemostático).",
      images: [
        { url: "/images/fungusCol/Cepa 6A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 6B.jpg", caption: "Figura B"  },
        { url: "/images/fungusCol/Cepa 6C.jpg", caption: "Figura C"  },
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
        { url: "/images/fungusCol/Cepa 7A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 7B.jpg", caption: "Figura B"  },
      
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
        { url: "/images/fungusCol/Cepa 8A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 8B.jpg", caption: "Figura B"  },
        { url: "/images/fungusCol/Cepa 8C.jpg", caption: "Figura C"  },
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
      habitat: "Tronco caído al lado del camino entre maleza ",
      CommonName: "kallambas/callambas, orejas de palo",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 9A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 9B.jpg", caption: "Figura B"  },
       
      ],
    },

    {
      id: "10",
      name: "Pleurotus djamor. (Fr.) P. Kumm).",
      scientificName: "Basidiomycota- Agaricomycetes- Agaricales- Pleurotaceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. Píleo: Largo entre 4-8.5 cm y ancho entre 3-9 cm, Pleurotoide, sin estípite, algunos de forma pulmonar, flavoloide con margen lobulado y ondulado, inserción lateral al sustrato, color salmón claro, superficie glabra. Contexto: 1mm de grosor, grisáceo. Consistencia: membranoso. Himenóforo: tipo lamelado, color salmón- rosado. Lamelas: hasta 4mm de alto, segmentiforme, cercanos, margen entero. Lamelulas:2-3. KOH (-)",
      descriptionMicro: "Figuras B-C. Basidiosporas baciliformes hialinas en KOH de 12x3µl (100x).",
      habitat: "Arbol vivo, bosque, Hábito: Cespitoso o fistulado ",
      CommonName: "kallambas/callambas, orejas de palo",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 10A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 10B.jpg", caption: "Figura B"  },
      ],
    },

    {
      id: "11",
      name: "Lentinus scleropus (Pers.) Fr. (1836)",
      scientificName: "Basidiomycota- Agaricomycetes- Polyporales- Polyporaceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico.",
      descriptionMacro: "Figura A. píleo: 12 x10, 13x14,4x6, 5x6 cm, infundibuliforme con consistencia correosa, superficie de color blanco con tonos grisáceo medio, superficie seca, opaca y fibrilosa, con margen amarillo oscuro, ondulado, lobulado levantado, rasgado con la edad. Contexto: hasta 1,2 cm de grosor, color blanco puro, carnoso, glabro. Lamelas: 0,8 – 1 cm de alto, segmentiforme, decurrente, subdistantes, de color blanco crema, margen entero, algunos enrodado, con lamelulas de varias longitudes. Estípite: 4,5 – 10 cm de longitud, 0,8 cm de diámetro cerca del ápice 1,4 cm en la parte media, 1,5 m en la base, central o excéntrico, consistencia correosa, con colora con la superficie del píleo, el borde tiende a cambiar a amarillo ocre.",
      descriptionMicro: "Figura B. esporas elipsoidales de 8x3 µm de diámetro, lalargadas con apícula lateral, de pared fina y con muy ligero contenido en su interior. Habito y hábitat: Agrupado con basidiocarpos en diferentes estados de maduración-crecimiento en troncos de árbol en descomposición.",
      habitat: "Tronco muerto de pie, al borde de camino, en un barranco. Hábito: fistulado o cespitoso. ",
      CommonName: "kallambas/callambas, orejas de palo",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 11A.jpg", caption: "Figura A" },
        { url: "/images/fungusCol/Cepa 11B.jpg", caption: "Figura B"  },
      ],
    },

    {
      id: "12",
      name: "Psilocybe cubensis.(Earle) Singer, 1948).",
      scientificName: "Basidiomycota- Agaricomycetes- Agaricales-Hymenogastraceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. Píleo 1.4-5.4 cm de diámetro, campanulado a umbonado, de superficie lisa, húmedo, brillante de color amarillo hacia el centro y más pálido hacia el margen. Cambio a azul con el tacto. Estípite 3.0-8.5 cm de longitud",
      descriptionMicro: "Figura B-Tinción de Melzer: esporas de 12-20 x 7-10 (100x) de color café lisas de pared gruesa.",
      habitat: "Gregario, crece en excreta de ganado. ",
      CommonName: "Hongo de excreta de ganado-sombrilla",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 12A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 12B.jpg", caption: "Figura B"},
      ],
    },

    {
      id: "13",
      name: "Scleroderma citrinun(Bull.) Pers. (1801)",
      scientificName: "Basidiomycota-Agaromycetes-Boletales-Sclerodermataceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A-B- sin estípite, gleba o carpóforo globoso de color crema-amarillento, en el interior presenta polvo esporal de color negro.",
      descriptionMicro: "Figura C-Tinción de Melzer: esporas de 10 a 13 µm de diámetro, globosas, ornamentadas con cortas espículas",
      habitat: "Gregario, crece en suelo de bosque ectomicorrizogeno",
      CommonName: "Pedo de bruja",
      uso: "Medicinal (hemostático)",
      images: [
        { url: "/images/fungusCol/Cepa 13A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 13B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 13C.jpg", caption: "Figura C"},
      ],
    },
    
    {
      id: "14",
      name: "Lepiota cf. cristata. (Bolton) P. Kumm 1871",
      scientificName: "Basidiomycota-Agaricales-Agaricomycetes-Agaricaceae",
      fechaRecol: "25/01/2020",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A-B. Pileo de 2 a 5 cm de diámetro, campanulado al principio para luego hacerse convexo o aplanado, obtusamente mamelonado, con el margen algo apendiculado, flocoso; cutícula lisa, mate, de color amarillo sobre fondo blanco. Láminas libres, de color blanco o blanco cremoso. Pie de 3 - 6 x 0.3 - 0.6 mm, frágil, cilíndrico, hueco, de color blanco para volverse rosado, especialmente en la base.",
      descriptionMicro: "Figura C-KOH. Esporas elipsoidales de tamaño 10-13x 7-8 µl, de paredes lisas y con numerosas gotitas de grasa en su interior, con poro germinativo pequeño pero evidente.",
      habitat: "Disperso, crece en suelo",
      CommonName: "Hongo del suelo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 14A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 14B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 14C.jpg", caption: "Figura C"},
      ],
    },


    {
      id: "15",
      name: "Suillus luteus (L.: Fries) Gray",
      scientificName: "Basidiomycota-Boletales-Agaricomycetes-Suillaceae",
      fechaRecol: "02/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Campamento",
      descriptionMacro: "Figura A-B-C. Píleo de 10 cm de diámetro, de forma inicialmente convexa. Es de color pardo oscuro, cuando se seca adquirió tonos ocre-amarillentos. Su superficie es muy viscosa con borde es regular. El himenio tiene poros pequeños y angulosos de color amarillo. Estípite corto de 5 cm de largo",
      descriptionMicro: "Figura D-Azul de lactofenol: esporas alargadas de 10x3µm, de paredes lisas, redondeadas por ambos extremos y con un pequeño apículo en uno de los extremos por donde se sujetaba al basidio y en muchos casos una gruesa vacuola en su interior.",
      habitat: "Disperso, crece en suelo-ectomicorrizogeno de pino.",
      CommonName: "Pambazo",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 15A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 15B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 15C.jpg", caption: "Figura C"},
        { url: "/images/fungusCol/Cepa 15D.jpg", caption: "Figura D"},
      ],
    },

    {
      id: "16",
      name: "Ustilago maydis (Corda, 1842)",
      scientificName: "Basidiomycota-Ustilaginales-Ustilagonomycetes-Ustilaginaceae",
      fechaRecol: " 03/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Tabio",
      descriptionMacro: "Figura A. Tumores de hasta 10 cm de diámetro de colores blanco y negras en la mazorca de maíz con membrana lisa, fina y grisácea.",
      descriptionMicro: "Figura B-Azul de lactofenol. Esporas globosas, subglobosas, ovoides o algo alargadas e irregulares, de 10-15x10 µm, de color pardo verdoso, con una pared de 0.5 µm de grosor, finamente equinulada.",
      habitat: "Gregario, crece en maíz",
      CommonName: "Hongo del maiz",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 16A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 16B.jpg", caption: "Figura B"},
        
      ],
    },

    {
      id: "17",
      name: "Crepidotus aplanatus (1965) Sensu Rea (1922)",
      scientificName: "Basidiomycota-Basidiomycetes-Agaricales-Crepidotaceae",
      fechaRecol: " 29/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Chapio",
      descriptionMacro: "Figura A. Píleo de 2-3 cm, en forma de concha, con margen muy enrollado. Cutícula blanca. Láminas decurrentes, de arista aserrada, color blanco. Estípite muy corto, lateral.",
      descriptionMicro: "Figura B-KOH. Esporas de 8x8 refringentes con pequeñas espículas y una vacuola.",
      habitat: "Disperso, crece en suelo",
      CommonName: "Hongo del palo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 17A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 17B.jpg", caption: "Figura B"},
      ],
    },


    {
      id: "18",
      name: "Lentinus swaetzii Berk., 1843",
      scientificName: "Basidiomycota-Agaricomycetes-Poliporales-Poliporaceae",
      fechaRecol: " 30/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Ambiro Bajo",
      descriptionMacro: "Figura A. Píleo 1-5 cm de diámetro, plano, color amarillo ocre, aspecto algodonoso.",
      descriptionMicro: "Figura B-KOH. Esporas 10-11x2 µm de diámetro",
      habitat: "Gregario, crece en madera",
      CommonName: "Hongo del palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 18A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 18B.jpg", caption: "Figura B"},
      ],
    },

    {
      id: "19",
      name: "Trametes sanguínea (L.) (Klotzsch) Pat. 1897",
      scientificName: "Basidiomycota-Agaromycetes-Poliporales-Poliporaceae",
      fechaRecol: " 30/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Ambiro Bajo",
      descriptionMacro: "Figura A. Color naranja intenso, con anillos concéntricos en la cara superior y poros diminutos en la cara inferior.",
      descriptionMicro: "Figura B-C-Tinción de Mezlar. Esporas de 8 x 3 µm de diámetro",
      habitat: "Gregario, crece en madera",
      CommonName: "Hongo de palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 19A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 19B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 19C.jpg", caption: "Figura C"},
      ],
    },


    {
      id: "20",
      name: "Trichaptum sp. Murrill (1904)",
      scientificName: "Basidiomycota-Agaromycetes-Hymenochaetales-Incertae sedis",
      fechaRecol: " 30/07/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Ambiro Bajo",
      descriptionMacro: "Figura A. Píleo de color amarillo aplanado de margen delgado y ondulado, poros dentados.",
      descriptionMicro: "Figura B-Tinciòn de Mezlar. Basidios con esporas alargadas 9x3 µm",
      habitat: "Gregario, crece en madera seca",
      CommonName: "Hongo de palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 20A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 20B.jpg", caption: "Figura B"},
        
      ],
    },

    {
      id: "021",
      name: "Panaeolus fimicula. (Fr., 1872)",
      scientificName: "Basidiomycota-Agaromycetes-Agaricales-Incertae sedis",
      fechaRecol: "13/08/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda 20 de julio",
      descriptionMacro: "Figura A-B. Píleo es de hemisférico-convexo a campanulado de 2 cm de diámetro, de color café oscuro, superficie lisa, margen incurvado, flocos. Láminas adnatas, no muy juntas, casi libres, con lamélulas, borde liso, color gris a negro. Estípite cilíndrico de 5 cm de longitud X 0.3 cm de diámetro, delgado, frágil, concoloro con el píleo, carne blanquecina.",
      descriptionMicro: "Figura C-KOH. Esporas ovoides lisas de 11x7 µm (100x), con poro germinativo excéntrico y amiloides",
      habitat: "Gregario, crece en excreta de ganado",
      CommonName: "Hongo de boñiga de ganado",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 21A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 21B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 21C.jpg", caption: "Figura C"},
      ]
    },

    {
      id: "022",
      name: "Laetiporus sulphureus. (Bull.) Murrill (1920)",
      scientificName: "Basidiomycota-Agaricomycetes-Polyporales-Fomitopsidaceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patia",
      descriptionMacro: "Figura A-B. El cuerpo fructífero emerge directamente del tronco de un árbol de pino, seca y quebradiza, con forma de abanicos superpuestos. Es de color amarillo claro. La superficie fértil es de color amarillo con pequeños poros o tubos",
      descriptionMicro: "Figura C-KOH. Esporas de 2-3x2µm de diámetro (100x)",
      habitat: "Gregario, crece en tronco de árbol",
      CommonName: "Hongo de palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 22A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 22B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 22C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "023",
      name: "Pleurotus djamor (Fr.) P. Kumm).",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Pleurotaceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Campamento",
      descriptionMacro: "Figura A. Hongo plecrotoide no estipitado con inserción lateral. Píleo: ejemplares con ancho de 1,1 cm a 8,7 cm y largo de 1,8 – 8,2 cm, grosor de 5-10 mm. Forma flabeliforme a pulmonada. Superficie: de cutícula seca, lisa a corrugada, color gris plomo, cuando más seca se torna blancuzco o naranja. Margen crodado y ondulado, contexto blanco de 1- 1,4 mm de grosor, espumoso. Consistencia membranosa- carnosa. Píleo higrafano, con intersección lateral. Himenoforo lamelado, láminas blancas apretadas de 3-6 mm de alto, margen irregular crodada. Láminas desde el margen hasta punto de inserción del basidioma al sustrato. Forma de lámina segmentiforme. Láminas higrofanas, lamelas de 3 series.",
      descriptionMicro: "Figuras B-C-Tinción de Melzer. Basidios con basidiosporas baciliformes hialinas en KOH de 5x3µl (100x).",
      habitat: "No especificado",
      CommonName: "Oreja de palo blanda",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 23A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 23B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 23C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "024",
      name: "Entoloma sp. (Bull.) P. Kumm. 1871",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Entolomataceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda 20 de julio",
      descriptionMacro: "Figura A-B. Píleo de 1,2 a 3,3 cm de diámetro, hundido; superficie tomentosa color crema oscuro (oac697); margen lisa. Contexto de 0,1 cm de grosor, color crema claro. Lamelas libres concoloras con el Píleo; margen ondulada. Lamélulas de varias longitudes. Estípite de 0,4 a 2 cm de diámetro cerca al ápice, 1,7 a 4 cm de longitud, central, concoloro con el Píleo; superficie lisa; interior hueco de color más claro que el exterior.",
      descriptionMicro: "Figura C-KOH. Basidios con esporas de 10-11x8-10 µm (100x) de diámetro de formas tetraédricas, inamiloides con reactivo de Melzer.",
      habitat: "Creciendo solitario sobre el suelo.",
      CommonName: "Hongo del suelo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 24A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 24B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 24C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "025",
      name: "Volvariella sp. (Bulliard ex Fries) Singer, 1951",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Pleurotaceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Chapio",
      descriptionMacro: "Figura A. Píleo de 4x10cm, de acampanado a extendido y algo mamelonado. Cutícula seca, cubierta de fibrillas gris-oscuro, color gris (más oscuro en el centro y claro hacia el borde). Láminas libres, apretadas, blancas, van virando al rosa y finalmente, rosa-ladrillo. Estípite virando de piloso a glabro, pruinoso en la parte superior, estriado, color blanco. Volva gris, concolora con el píleo.",
      descriptionMicro: "Figura B-KOH-C-Tinciòn de Mezlar. Esporas elípticas de 13x6µm de diámetro, de pared gruesa",
      habitat: "No especificado",
      CommonName: "Hongo del suelo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 25A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 25B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 25C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "026",
      name: "Lentinus crinitus (L.) Fr., 1825",
      scientificName: "Basidiomycota-Agaricomycetes-Polyporales-Polyporaceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Chapio",
      descriptionMacro: "Figura A. Píleo de 2.0 cm, embudado y enrollado en el borde, con depresión central, con un color que varía del pardo al beige, con tonalidades café. Cutícula muy lanuda al acercarse a los bordes, y está toda cubierta por abundantes escamas pilosas. Láminas marcadamente decurrentes, de un color entre beige y crema claro, con el borde dentado (crenulado), angostas y bastante apretadas, con abundantes lamélulas y con algunas de ellas bifurcadas. Estípite cilíndrico, escamoso, concoloro con el pileo y con tonalidades más oscuras en su base.",
      descriptionMicro: "Figura B-Tinción de mezlar. Esporas 6x2µm (100x) de diámetro de pared fina, cilíndricas, alargadas de forma entre recta y algo curvadas, con apícula lateral y con una o varias vacuolas muy tenues en su interior. Reacción inamiloide al Melzer.",
      habitat: "No especificado",
      CommonName: "Hongo de palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 26A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 26B.jpg", caption: "Figura B"},
        
      ]
    },
    {
      id: "027",
      name: "Agaricus sp.",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Agaricaceae-Agaricus sp.",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patía",
      descriptionMacro: "Figura A-B. Píleo de 8 cm, carnoso, globoso en el centro y extendido hacia el borde, va aplanándose, margen excedente y deshilachado. Cutícula blanca, sedosa, con escamas pardas, más evidentes en el centro, color de fondo variable pardo. Láminas cerradas y libres, apretadas, ventrudas, color rosa-carne de joven que ennegrecen. Estipite blanco, sólido, liso, separable. Anillo simple, superior, blanquecino, membranoso, estrecho y frágil. Sin volva. Carne espesa, blanca, vira a rosada en contacto con el aire. Olor-sabor suave, agradable.",
      descriptionMicro: "Figura C-KOH. Esporas elípticas lisas de 8-10 x5 µm de diámetro (100x), poro germinal",
      habitat: "No especificado",
      CommonName: "Hongo del suelo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 27A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 27B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 27C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "028",
      name: "Phellinus sf pini. (Brot.: Fr.)",
      scientificName: "Basidiomycota-Agaricomycetes-Hymenochaetales-Hymenochaetaceae",
      fechaRecol: "22/10/2021",
      localidad: "Colombia, Cauca, Puracé. Pueblo",
      descriptionMacro: "Figuras A-B. sin estípite, basidiocarpo con píleo hasta 8 cm de diámetro y hasta 4 cm de grosor, consistencia leñosa, color café claro(oac715), el himenio de un color marrón oscuro (aoc701)",
      descriptionMicro: "Figura C-Tinción de Melzer. Basidiosporas subglobosas de pared gruesa 12x7 micras de diámetro (100x)",
      habitat: "No especificado",
      CommonName: "Oreja de palo duro",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 28A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 28B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 28C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "029",
      name: "Lentinus scleropus (Pers.) Fr. (1836)",
      scientificName: "Basidiomycota-Agaricomycetes-Poliporales-Poliporaceae",
      fechaRecol: "25/10/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. Píleo: 12 x10, 13x14,4x6, 5x6 cm, infundibuliforme con consistencia correosa, superficie de color blanco con tonos grisáceo medio, superficie seca, opaca y fibrilosa, con margen amarillo oscuro, ondulado, lobulado levantado, rasgado con la edad. Contexto: hasta 1,2 cm de grosor, color blanco puro, carnoso, glabro. Lamelas: 0,8 – 1 cm de alto, segmentiforme, decurrente, subdistantes, de color blanco crema, margen entero, algunos enrodado, con lamelulas de varias longitudes. Estípite: 4,5 – 10 cm de longitud, 0,8 cm de diámetro cerca del ápice 1,4 cm en la parte media, 1,5 m en la base, central o excéntrico, consistencia correosa, con colora con la superficie del píleo, el borde tiende a cambiar a amarillo ocre.",
      descriptionMicro: "Figuras B-KOH-C-Tinción de Melzer. Esporas elipsoidales 8-9x 3 µm de diámetro alargadas con apícula lateral, de pared fina y con muy ligero contenido en su interior",
      habitat: "Fistulado o cespitoso. Agrupado con basidiocarpos en diferentes estados de maduración-crecimiento en troncos de árbol en descomposición",
      CommonName: "Kallambas o callambas, orejas de palo",
      uso: "Alimenticio",
      images: [
        { url: "/images/fungusCol/Cepa 29A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 29B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 29C.jpg", caption: "Figura C"},
      ]
    },
    {
      id: "030",
      name: "Daldinia concentrica. (Bolton) Ces. & De Not.",
      scientificName: "Ascomycota-Soldariomycetes-Xilariales-Xilariaceae",
      fechaRecol: "05/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figuras A-B. El ascostroma es hemisférico-subgloboso, de consistencia carbonosa a dura, de 4 cm de diámetro, color violáceo con la superficie granulosa, que en corte longitudinal presenta un endostroma con múltiples capas o franjas concéntricas blanquecinas separadas por una línea negra, donde se desarrollan los peritecios.",
      descriptionMicro: "Figura C-Azul de lactofenol. Esporas elipsoides, lisas de 12-16 X 5-7.5 µm, oscuras, con hendidura germinal recta de menor tamaño que la longitud de la espora.",
      habitat: "No especificado",
      CommonName: "Hongo de palo viejo",
      uso: "No uso",
      images: [
        { url: "/images/fungusCol/Cepa 30A.jpg", caption: "Figura A"},
        { url: "/images/fungusCol/Cepa 30B.jpg", caption: "Figura B"},
        { url: "/images/fungusCol/Cepa 30C.jpg", caption: "Figura C"},
      ]
    },

    {
      id: "031",
      name: "Lentinus crinitus (L.) Fr., 1825",
      scientificName: "Basidiomycota- Agaricomycetes-Poliporales-Poliporaceae",
      fechaRecol: "05/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. Píleo de 3 a 5 cm de diámetro, infundibuliforme; superficie seca, color café rojizo oscura (oac638) cuando joven y café más claro (oac538) cuando vieja; margen rimosa. Contexto menor a 0,2 cm de grosor, carnoso, blanco. Olor y sabor no característicos. Lamelas decurrentes a subdecurrentes, blancas cuando jóvenes y crema amarillosas (oac857) cuando viejas; margen ondulada. Lamélulas de 2 longitudes. Estípite de 0,3 a 0,5 cm de diámetro cerca al ápice, de 2 a 3,7 cm de longitud, central, de cilíndrico a medianamente clavado; superficie seca, estrigosa cuando joven, casi hirsuta cuando vieja; interior blanco, sólido.",
      descriptionMicro: "Figura B-KOH. basidiosporas hialinas de 5-9x2 µm",
      habitat: "Creciendo gregario sobre madera en descomposición",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "032",
      name: "Macrolepiota sp. (Scop.) Singer, 1948",
      scientificName: "Basidiomycota-Basidiomycetes-Agaricales-Agaricaceae",
      fechaRecol: "20/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patía",
      descriptionMacro: "Figuras A-B. Píleo marrón pálido, que luego se oscureció con diámetro de hasta 30 cm. Presenta escamas aplanadas y oscuras, que irradian desde el centro, donde se sitúa un umbón oscuro. Láminas libres, blancas y apretadas. Estípite entre 15 a 20 cm largo con un anillo doble también cubierto de escamas, y que se separa fácilmente del píleo.",
      descriptionMicro: "Figura C-KOH. Esporas de 12x8 µm de diámetro (100x)",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "033",
      name: "Lycoperdon sp. Pers",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Agaricaceae",
      fechaRecol: "20/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patía",
      descriptionMacro: "Figuras A-B. Cuerpo fructífero piriforme de 4 cm de diámetro, color café claro que se oscurece cuando madura.",
      descriptionMicro: "Figura C-Tinciòn de Melzer Esporas oscuras de 3x3µm de diámetro (100x)",
      habitat: "No especificado",
      CommonName: "pedo de duende o pedorro",
      uso: "medicinal (hemostático)",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "034",
      name: "Lycoperdon perlatum Pers.",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Agaricaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda San Patico",
      descriptionMacro: "Figura A. Los carpóforos tienen forma redondeada, de entre 2 y 5 cm de diámetro y entre 4 y 9 de altura. El exoperidio o capa externa es blanquecino-amarillo.",
      descriptionMicro: "Figura B-Tinciòn de Melzer. Esporas de 3x3µm de diámetro (100x).",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "035",
      name: "Geastrum sp. Pers.",
      scientificName: "Basidiomycota-Agaricomycetes-Geastrales-Geastraceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. El nombre de este hongo se refiere a la forma externa del peridio. En la madurez, la capa externa del cuerpo fructificante se divide en segmentos hacia afuera, que, a su vez, crea un patrón en forma de estrella en el suelo. El peridio interior es un saco de esporas; mientras que, en algunas especies, el peridio externo se separa de una capa intermedia, haciendo que el saco de esporas se acerque a la tierra. Si el peridio exterior se abre cuando está mojado y se cierra cuando se seca, se describe como higroscópico.",
      descriptionMicro: "Figura B-KOH. Esporas de 4x4µm de diámetro con espiculas",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "036",
      name: "Suillus luteus (L.: Fries) Gray",
      scientificName: "Basidiomycota-Boletales-Agaricomycetes-Suillaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figuras A-B. Píleo de 10 cm de diámetro, de forma inicialmente convexa. Es de color pardo oscuro, cuando se seca adquirió tonos ocre-amarillentos. Su superficie es muy viscosa con borde es regular. El himenio tiene poros pequeños y angulosos de color amarillo. Estípite corto de 5 cm de largo",
      descriptionMicro: "Figura B. Las esporas son alargadas de 7-10x3µm, de paredes lisas, redondeadas por ambos extremos y con un pequeño apículo en uno de los extremos por donde se sujetaba al basidio y en muchos casos una gruesa vacuola en su interior.",
      habitat: "disperso, crece en suelo-ectomicorrizogeno de pino",
      CommonName: "pambazo",
      uso: "alimenticio",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "037",
      name: "Geastrum triplex. Jungh. 1840p",
      scientificName: "Basidiomycota- Agaricomycetes- Geastrales- Geastraceae-",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "El nombre se refiere a la forma externa del peridio. En la madurez, la capa externa del cuerpo fructificante se divide en segmentos hacia afuera, que, a su vez, crea un patrón en forma de estrella en el suelo. El peridio interior es un saco de esporas; mientras que, en algunas especies, el peridio externo se separa de una capa intermedia, haciendo que el saco de esporas se acerque a la tierra. Si el peridio exterior se abre cuando está mojado y se cierra cuando se seca, se describe como higroscópico.",
      descriptionMicro: "esporas de 4x4µm de diámetro con espiculas",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "038",
      name: "Poliporal (c.f Trametes sp.)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. sésil, imbricado, de 2.5-5 cm, con un radio de 1-2 cm aproximadamente, grosor de 2 mm. Forma flabeliforme, abriéndose a partir del sustrato, de color blanco a negro, pasando por tonos grises de distintos matices. De superficie vellosa en los especímenes jóvenes, quedando glabra en ejemplares adultos, con el borde ondulado de manera irregular. Himenio de color blanquecino a marrón en la etapa adulta, de 1-3 poros angulares por mm.",
      descriptionMicro: "Figura B-Tinciòn de Melzer. Basidios con esporas de 3x3µm de diámetro (100x).",
      habitat: "sobre tronco de árbol, comúnmente en árboles de pino",
      CommonName: "hongo de tronco",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    
    {
      id: "039",
      name: "Poliporal c.f Trametes sp.",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. Basidiocarpo sésil, imbricado, de 2.5-5 cm, con un radio de 1-2 cm aproximadamente, grosor de 2 mm. Forma flabeliforme, abriéndose a partir del sustrato, de color blanco a negro, pasando por tonos grises de distintos matices. De superficie vellosa en los especímenes jóvenes, quedando glabra en ejemplares adultos, con el borde ondulado de manera irregular. Himenio de color blanquecino a marrón en la etapa adulta, de 1-3 poros angulares por mm.",
      descriptionMicro: "Figura B-Tinciòn de Melzer. Esporas de 5x5µm de diámetro (100x).",
      habitat: "No especificado",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "040",
      name: "Laccaria sp.",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Hygnangiaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. Píleo convexo algo deprimido de 4 cm, sombrero. Su cutícula es finamente escamosa, de color pardo rojizo con un tono ocráceo más pálido. El margen es estriado por transparencia. Láminas adnatas o ligeramente decurrentes de color rosa muy claro, relativamente separadas entre sí y con laminillas intercaladas, son bastante gruesas y suelen ser pulverulentas por la abundante esporada blanca que se posa sobre ellas. Estípite alargado con respecto al diámetro del sombrero. Se presenta longitudinalmente acanalado y bastante fibriloso, de color similar al del sombrero o algo más oscuro, con la unión micelial blanquecina.",
      descriptionMicro: "Figura B-KOH. Esporas de 10x 6-8 µm de diámetro (100x).",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "041",
      name: "Poliporal Fr. ex Corda1",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "29/11/2021",
      localidad: "Colombia, Cauca, Puracé, Vereda Patico",
      descriptionMacro: "Figura A. Carpoforo de 16x13cm de diámetro y 0,1 de ancho de color crema e himenio con poros, fuertemente adherido a la madera",
      descriptionMicro: "Figura B-KOH Esporas de 9x4µm de diámetro",
      habitat: "No especificado",
      CommonName: "oreja de palo duro",
      uso: "Escribir-Es",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "042",
      name: "Morchella cf. esculenta. (L) Pers. 1794 (F.r.)",
      scientificName: "Ascomycota-Pezizomycetes-Pezizalez-Morchellaceae",
      fechaRecol: "21/02/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Ambiro bajo",
      descriptionMacro: "Figuras A-B. Formadas por un tronco blanquinoso que sostiene un sombrero en forma esférica, redondeada u ovoide, de 6 a 10 cm de ancho, de color miel, con una forma semejante a un avispero. El tronco, que también está vacío, es blanquinoso. La carne es frágil y muy escasa y prácticamente inodora.",
      descriptionMicro: "Figura C-Tinciòn de Melzer. Esporas 9-15x4-8 µm de diámetro",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "043",
      name: "Laccaria laccata (Scop.) Cooke 1884",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Hydnangiaceae",
      fechaRecol: "21/02/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda San Juan",
      descriptionMacro: "Figuras A-B. Carpóforo de talla pequeña, poco carnoso, sombrero algo deprimido en el centro. Cutícula pardo-naranja o pardo-rojizo, colores brillantes, lisa, higrófana, en seco algo escamosa. Láminas espaciadas, con lamélulas, de color lila o rosado. Pie curvado y fibroso. Carne escasa de color rosa pálido. Sabor dulzón.",
      descriptionMicro: "Figura C-KOH. Esporas hialinas de 6x3µm de diámetro",
      habitat: "No especificado",
      CommonName: "hongo del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "044",
      name: "Laetiporus sulphureus. (Bull.) Murrill (1920)",
      scientificName: "Basidiomycota- Agaricomycetes-Poliporales-Fomitopsidaceae",
      fechaRecol: "08/06/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. El cuerpo fructífero emerge directamente del tronco de un árbol de pino, seca y quebradiza, con forma de abanicos superpuestos. Es de color amarillo claro. La superficie fértil es de color amarillo con pequeños poros o tubos",
      descriptionMicro: "Figura C-KOH. Esporas de 2-3x2µm de diámetro (100x)",
      habitat: "gregario, crece en tronco de árbol",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "045",
      name: "Poliporal c.f. Trametes nivosa. Berk.) Murrill (1907)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. Cuerpos fructíferos duros de color blanco que luego se tornaron amarillos",
      descriptionMicro: "Figura C-KOH esporas de 7x2 µm de diámetro",
      habitat: "gregario, crece en tronco de árbol",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "046",
      name: "Poliporal c.f. Trametes pubescens. (Schumach.) Pilát (1939)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Superficie del píleo finamente aterciopelada de color crema con textura coriacea.",
      descriptionMicro: "Figuras B-KOH C. Tinción de melzer. Esporas ovaladas de 3x2µm de diámetro",
      habitat: "gregario, crece en tronco de árbol, causa podredumbre blanca",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "047",
      name: "Poliporal (c.f Trametes sp.)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Píleo finamente aterciopelada de color crema, la superficie del pileo carece de zonas de color fuertemente contrastantes.",
      descriptionMicro: "Figura B-KOH: esporas hialinas 1.8x2.3µm de diámetro",
      habitat: "gregario, crece en tronco de árbol",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "048",
      name: "Schizophyllum commune (Fr. 1815).",
      scientificName: "Basidiomycota-Agaromycetes-Agaricales-Schizophyllaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Píleo con ondas ondulantes, color amarillo cremoso a blanco pálido. El píleo es pequeño, de 1 a 4,5 cm de ancho con una textura corporal densa pero esponjosa.",
      descriptionMicro: "Figura B-KOH. Esporas de 6x2 µm de diámetro",
      habitat: "gregario, crece en tronco de árbol",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
     

    {
      id: "049",
      name: "Poliporus sp. P.Micheli ex Adans. (1763)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Píleo con un diámetro de 10 cm, seca y opaca, color marrón beige, finamente afelpada y luego se vuelve finamente escamosa. La mitad del píleo está hundida como un ombligo y ampliamente jorobada y el borde ciliado corto. Los poros redondos y muy finos (4-6 por mm) son blancos y descienden por el tallo. El estipite tiene una textura granulada de color marrón grisáceo sobre un fondo blanquecino.",
      descriptionMicro: "Figura B-Tinciòn de melzer: espora 6x3µm de diámetro (100x)",
      habitat: "No especificado",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "050",
      name: "Trametes versicolor. (L.:Fr.) Quél",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. La superficie superior del píleo muestra zonas concéntricas de diferentes tonalidades de café, 1-3 mm de textura gruesa, correosa, con zonas de pelos finos, himenio de superficie porosa blanquecina a marrón claro, poros redondos.",
      descriptionMicro: "Figura C-Tinciòn de Melzer: esporas 5-7 x 2-3 µm de diámetro",
      habitat: "No especificado",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "051",
      name: "Arcocoryne sarcoides (Jacq.) J.W.Groves & D.E.Wilson (1967)",
      scientificName: "Ascomycota-Leotiomycetes-helotiales-Helotiaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. presenta agrupaciones de aspecto gelatinoso, cerebriforme o lobuladas irregularmente, recién recolectados se observaron de color uniforme rosado o lila pálido, cuando se secaron adoptaron un color mate, marrón púrpura.",
      descriptionMicro: "Figura C-KOH. Se observan ascas con 4 ascosporas de 18x6µm de diámetro",
      habitat: "No especificado",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "052",
      name: "Suillus luteus (L.: Fries) Gray",
      scientificName: "Basidiomycota-Boletales-Agaricomycetes-Suillaceae",
      fechaRecol: "12/08/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda 20 de julio",
      descriptionMacro: "Figuras A-B. Píleo es de color marrón y de forma convexa, con un diámetro entre 4 a 10 centímetros. La cutícula es viscosa y su borde es enrollado. Los tubos son de color amarillo pálido. Los poros son pequeños y angulosos, amarillos en fases iniciales y parduscos conforme envejece. La carne es blanca amarillenta, de olor afrutado.",
      descriptionMicro: "Figura C-KOH. Esporas de 8-9x3-4µm de diámetro",
      habitat: "No especificado",
      CommonName: "pambazo",
      uso: "alimenticio",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "053",
      name: "Phellinus sp. Quél. (1886)",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/09/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. Carpoforo duro y leñoso de color marrón.",
      descriptionMicro: "Figura C-Azul de lactofenol. Espora 4x4 µm de diámetro",
      habitat: "solitario, crece adherido en madera",
      CommonName: "oreja de palo duro",
      uso: "escritura-ES",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "054",
      name: "Poliporal Fr. ex Corda1",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "12/09/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Carpoforos de consistencia dura de color crema",
      descriptionMicro: "FiguraB-C-Tinciòn de Melzer: Esporas de 4x2µm de diámetro",
      habitat: "gregario, crece adherido a madera",
      CommonName: "orejas de palo duras",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "055",
      name: "Ramaria stricta (Pers.) Quél. (1888)",
      scientificName: "Basidiomycota-Agaricomycetes-Gomphales-Gomphaceae",
      fechaRecol: "12/09/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Forma coraloide muy ramificada, tronco delgado de color amarillento formado por numerosas ramas verticales, estrechas, largas y paralelas y extremos bifurcados en puntas cortas. Himenio liso y mate, que cubre toda la superficie ramosa. Carne entre blanca y pardo rosado. Olor débil y agradable.",
      descriptionMicro: "Figura B-Tinciòn de Melzer- Figura C-Azul de Lactofenol. Esporas maduras son muy alargadas y fusiformes, contienen pequeñas vacuolas de sustancia de reserva que se aprecian verdosas. Las esporas presentan un apículo recurvado por donde se sujetaban al basidio. Tamaño 8-10x4-6µm de diámetro (100X)",
      habitat: "saprofita en suelo, crece cerca de ramas caídas",
      CommonName: "hongos del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "056",
      name: "Hidrocybe acutonica (Clem,) Singer 1951",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Hydrophoraceae",
      fechaRecol: "12/09/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. píleo de 1,7 a 5 cm de diámetro, de campanulado a plano, umbonado, amarillo (oac854); superficie glabra, fibrilosa, húmeda; margen rimosa, con manchas azules oscuras a negras. Contexto de 1 a 2 mm, amarillo cremoso (oac896) sin cambios de coloración. Lamelas adnadas, blancas tornándose crema amarillosas con manchas oscuras, subdistantes; margen entera. Lamélulas de al menos 2 longitudes diferentes. Estípite de 5 a 7 cm de longitud y 4 a 6,5 mm de diámetro, central, cilíndrico a clavado, amarillo concoloro con superficie del Píleo; superficie seca, fibrilosa, finamente pubescente.",
      descriptionMicro: "Figura C-KOH. Esporas globosas de 6-12x5-8µm de diámetro (100x)",
      habitat: "Creciendo solitario y gregario sobre suelo",
      CommonName: "hongos del suelo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" },
        { "url": "/images/", "caption": "Figura C" }
      ]
    },
    {
      id: "057",
      name: "Laetiporus sp. (Bull.) Murrill (1920)",
      scientificName: "Basidiomycota-Agaricomycetes-Polyporales-Fomitopsidaceae",
      fechaRecol: "12/09/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. Carpoforo de 9 cm en la parte central y en forma de abanico hasta de 19 cm, la superficie del píleo con ligeras arrugas, de colores opacos que van del amarillo a naranja, de margen ondulado, los poros son amarillos, pequeños.",
      descriptionMicro: "Figuras B-C-KOH, basidios con esporas de 5x3 micras con terminación en espículas",
      habitat: "gregario, crece adherido a madera",
      CommonName: "hongo de palo viejo",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "058",
      name: "Trametes sp.",
      scientificName: "Basidiomycota-Basidiomycetes-Poliporales-Poliporaceae",
      fechaRecol: "04/10/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figuras A-B. Carpóforo de consistencia dura coreosa, de color crema, himenóforo con poros dentados",
      descriptionMicro: "Figura C-KOH. Esporas 9-10x5-6µm de diámetro",
      habitat: "solitarios, crecen adherido a madera",
      CommonName: "orejas de palo duras",
      uso: "No uso",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "059",
      name: "Lycoperdon sp. Pers",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Agaricaceae",
      fechaRecol: "04/10/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda Hispala",
      descriptionMacro: "Figura A. cuerpo fructífero piriforme de 4 cm de diámetro, color café oscuro.",
      descriptionMicro: "Figura B-KOH. Esporas oscuras cafés de 3x3µm de diámetro (100x)",
      habitat: "pastizales, solitarios",
      CommonName: "pedo de duende o pedorro",
      uso: "medicinal-hemostático",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "060",
      name: "Pluteus cervinus. (Schaeff.) P.Kumm., 1871",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Pluteaceae",
      fechaRecol: "07/11/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figuras A-B. Píleo de color rosado de consistencia blanda y el himenio se observa en forma de láminas y el estípite de 15 cm de longitud y entre 1 y 2 de diámetro",
      descriptionMicro: "Figura C-KOH. Esporas redondas de 4x4 µm de diámetro",
      habitat: "madera viva y en descomposición",
      CommonName: "kallambas",
      uso: "alimenticio",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "061",
      name: "Pleurotus djamor (Fr.) P. Kumm.",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Pleurotaceae",
      fechaRecol: "07/11/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda San Alfonso",
      descriptionMacro: "Figura A. hongo plecrotoide no estipitado con inserción lateral. Píleo: ejemplares con ancho de 1,1 cm a 8,7 cm y largo de 1,8 – 8,2 cm, grosor de 5-10 mm. Forma flabeliforme a pulmonada. Superficie: de cutícula seca, lisa a corrugada, color gris plomo, cuando más seca se torna blancuzco o naranja. Margen crodado y ondulado, contexto blanco de 1- 1,4 mm de grosor, espumoso. Consistencia membranosa- carnosa. Píleo higrafano, con intersección lateral. Himenoforo lamelado, láminas blancas apretadas de 3-6 mm de alto, margen irregular crodada. Láminas desde el margen hasta punto de inserción del basidioma al sustrato. Forma de lámina segmentiforme. Láminas higrofanas, lamelas de 3 series.",
      descriptionMicro: "Figura B-KOH. Basidiosporas baciliformes hialinas de 7x2µl (100x).",
      habitat: "sustrato tronco caído al lado del camino entre maleza",
      CommonName: "kallambas/callambas, orejas de palo",
      uso: "alimenticio",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    },
    {
      id: "062",
      name: "Lycoperdon sp. Pers",
      scientificName: "Basidiomycota-Agaricomycetes-Agaricales-Agaricaceae",
      fechaRecol: "29/12/2022",
      localidad: "Colombia, Cauca, Puracé, Vereda 20 de julio",
      descriptionMacro: "Figura A. Cuerpo fructífero piriforme de 4 cm de diámetro, color café oscuro.",
      descriptionMicro: "Figura B-KOH. Esporas 3x3µm de diámetro (100x)",
      habitat: "pastizales, solitarios",
      CommonName: "pedo de duende o pedorro",
      uso: "medicinal-hemostático",
      images: [
        { "url": "/images/", "caption": "Figura A" },
        { "url": "/images/", "caption": "Figura B" }
      ]
    }
    
    

    
    
    

    

    

    


    
    // Agrega más hongos según sea necesario
  ]
}

export async function getFungusById(id: string): Promise<Fungus | null> {
  const fungi = await getAllFungi()
  return fungi.find((fungus) => fungus.id === id) || null
}


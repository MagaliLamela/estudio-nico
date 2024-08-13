const datosCardsAreas = [
    {
        id: 1,
        tituloParte1: "Derecho",
        tituloParte2: "Laboral",
        imagen: "/icono-derecho-laboral.jpg",
        descripcion: "Derecho laboralLorem ipsum doimus etur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 2,
        imagen: "/icono-accidentes.png",
        tituloParte1: "Accidentes",
        tituloParte2: "Viales",
        descripcion: "Accidentes vialesLorem dsipsum doir tenetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 3,
        tituloParte1: "Asesoramiento",
        tituloParte2: "Empresarial",
        imagen: "/icono-asesoramiento.jpg",
        descripcion: "Asesoramiento empresarialLorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 4,
        tituloParte1: "Sucesiones",
        tituloParte2: " ",
        imagen: "/icono-sucesiones.jpg",
        descripcion: "SucesionesLorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 5,
        tituloParte1: "Derecho",
        tituloParte2: "Penal",
        imagen: "/icono-derecho-penal.png",
        descripcion: "Derecho Penal Lorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    }
]


const obtenerDatosCardsAreas = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsAreas)
    });
}

export default obtenerDatosCardsAreas


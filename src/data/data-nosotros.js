const datosCardsNosotros = [
    {
        id: 1,
        tituloParte1: "Nicolás",
        tituloParte2: "Rocha",
        imagen: "/foto-abogado1.jpg",
        descripcion: "Derecho laboralLorem ipsum doimus etur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 2,
        imagen: "/foto-abogado2.jpg",
        tituloParte1: "Gonzalo",
        tituloParte2: "Berraondo",
        descripcion: "Accidentes vialesLorem dsipsum doir tenetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 3,
        tituloParte1: "Pepito",
        tituloParte2: "Gomez",
        imagen: "/foto-abogado3.avif",
        descripcion: "Asesoramiento empresarialLorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    }
]


const obtenerDatosCardsNosotros = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsNosotros)
    });
}

export default obtenerDatosCardsNosotros


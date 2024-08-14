const datosCardsNosotros = [
    {
        id: 1,
        tituloParte1: "Gonzalo",
        tituloParte2: "Berraondo",
        imagen: "/foto-abogado1.jpg",
        descripcion: "Derecho laboralLorem ipsum doimus etur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 2,
        imagen: "/foto-abogado1.jpg",
        tituloParte1: "Adrián Marcelo",
        tituloParte2: "Galarza",
        descripcion: "Accidentes vialesLorem dsipsum doir tenetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 3,
        tituloParte1: "Nicolás",
        tituloParte2: "Rocha",
        imagen: "/foto-abogado1.jpg",
        descripcion: "Asesoramiento empresarialLorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    }
]


const obtenerDatosCardsNosotros = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsNosotros)
    });
}

export default obtenerDatosCardsNosotros


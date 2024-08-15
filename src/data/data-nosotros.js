const datosCardsNosotros = [
    {
        id: 1,
        tituloParte1: "Gonzalo",
        tituloParte2: "Berraondo",
        imagen: "/foto-abogado1.jpg",
        descripcion: "Lorems ipsum doimus etur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 2,
        imagen: "/foto-abogado1.jpg",
        tituloParte1: "Pablo",
        tituloParte2: "Galarza",
        descripcion: "Lorem dsipsum doir tenetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 3,
        tituloParte1: "Nicolás S.",
        tituloParte2: "Rocha",
        imagen: "/foto-abogado1.jpg",
        descripcion: "Lorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    }
]


const obtenerDatosCardsNosotros = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsNosotros)
    });
}

export default obtenerDatosCardsNosotros


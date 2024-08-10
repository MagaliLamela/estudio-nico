const datosCards = [
    {
        id: 1,
        titulo: "Experiencia",
        imagen: "/icono-experiencia.jpg",
        descripcion: "ExperienciaLorem ipsum doimus etur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 2,
        imagen: "/icono-respuesta.png",
        titulo: "Respuesta",
        descripcion: "RespuestaLorem dsipsum doir tenetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 3,
        titulo: "Acuerdos",
        imagen: "/icono-acuerdo.png",
        descripcion: "AcuerdosLorsdem ipsum doimusnetur voluptatem quod eum sint officiis ipsam placeat?"
    },
    {
        id: 4,
        descripcion: "Lorem ipsum doimus animi. Cum consectetur tenetur voluptatem quod eum sint officiis ipsam placeat?"
    }
]


const obtenerDatosCards = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCards)
    });
}

export default obtenerDatosCards
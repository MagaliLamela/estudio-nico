const datosCardsInicio = [
    {
        id: 1,
        titulo: "Experiencia",
        imagen: "/icono-experiencia.png",
        descripcion: "Nuestros profesionales destacan por su amplia experiencia, conocimiento profundo y capacidad para resolver conflictos."
    },
    {
        id: 2,
        imagen: "/icono-respuesta.png",
        titulo: "Respuesta",
        descripcion: "Obtendrá soluciones personalizadas a la mayor brevedad posible."
    },
    {
        id: 3,
        titulo: "Acuerdos",
        imagen: "/icono-acuerdo.png",
        descripcion: "Contamos con grandes habilidades de negociación, capaces de lograr los acuerdos más beneficiosos para nuestros clientes."
    },
    {
        id: 4,
        descripcion: "Buscamos brindar soluciones efectivas, rápidas y personalizadas."
    }
]


const obtenerDatosCardsInicio = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsInicio)
    });
}

export default obtenerDatosCardsInicio
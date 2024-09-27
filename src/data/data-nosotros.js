const datosCardsNosotros = [
    {
        id: 1,
        tituloParte1: "Gonzalo",
        tituloParte2: "Berraondo",
        imagen: "/foto-gonzalo.jpeg",
        descripcion: "Abogado recibido de la Facultad de Derecho - UCES. Especializado en derecho laboral y accidentes de tránsito, con más de 16 años de experiencia brindando asesoramiento y representación en casos complejos."
    },
    {
        id: 2,
        imagen: "/foto-pablo.jpeg",
        tituloParte1: "Pablo",
        tituloParte2: "Galarza",
        descripcion: "Abogado recibido de la Facultad de Derecho - UBA. Especializado en derecho laboral, dedicado a la protección de los derechos de los empleados y empleadores."
    },
    {
        id: 3,
        tituloParte1: "Nicolás S.",
        tituloParte2: "Rocha",
        imagen: "/foto-nicolas.jpeg",
        descripcion: "Abogado recibido de la Facultad de Derecho - UBA. Especializado en derecho penal y sucesiones, con experiencia previa en el Ministerio Público de la Defensa. "
    }
]


const obtenerDatosCardsNosotros = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsNosotros)
    });
}

export default obtenerDatosCardsNosotros


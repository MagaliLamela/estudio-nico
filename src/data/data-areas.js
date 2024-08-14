const datosCardsAreas = [
    {
        id: 1,
        tituloParte1: "Derecho",
        tituloParte2: "Laboral",
        imagen: "/icono-derecho-laboral.png",
        descripcion: "El área de Derecho Laboral ofrece un asesoramiento detallado y adaptado a las circunstancias específicas de cada trabajador."
    },
    {
        id: 2,
        imagen: "/icono-accidentes.png",
        tituloParte1: "Accidentes",
        tituloParte2: "Viales",
        descripcion: "Proporcionamos una atención legal minuciosa, enfocada en defender los derechos de quienes han sufrido un siniestro vial."
    },
    {
        id: 3,
        tituloParte1: "Asesoramiento",
        tituloParte2: "Empresarial",
        imagen: "/icono-asesoramiento.png",
        descripcion: "Proporcionamos asesoramiento jurídico integral para empresas, asegurando el cumplimiento normativo y la protección de sus intereses comerciales."
    },
    {
        id: 4,
        tituloParte1: "Sucesiones",
        tituloParte2: " ",
        imagen: "/icono-sucesiones.png",
        descripcion: "Nuestro equipo te asesora y acompaña en cada paso del proceso sucesorio, asegurando que la distribución de bienes se realice conforme a la ley."
    },
    {
        id: 5,
        tituloParte1: "Derecho",
        tituloParte2: "Penal",
        imagen: "/icono-derecho-penal.png",
        descripcion: "Defendemos tus intereses en casos penales con un enfoque estratégico, trabajando para minimizar las consecuencias legales y proteger tus derechos."
    }
]


const obtenerDatosCardsAreas = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsAreas)
    });
}

export default obtenerDatosCardsAreas


const datosCardsAreas = [
    {
        id: "derecho-laboral",
        tituloParte1: "Derecho",
        tituloParte2: "Laboral",
        imagen: "/icono-derecho-laboral.png",
        descripcion: "El área de Derecho Laboral ofrece un asesoramiento detallado y adaptado a las circunstancias específicas de cada trabajador.",
        detalles: [
            { titulo: "Despidos: ", texto: "Protegemos tus derechos frente a un despido injustificado. Te acompañamos en el proceso para garantizar que recibas la mayor indemnización posible, defendiendo tus intereses en cada etapa del proceso." },
            { titulo: "Trabajo en negro: ", texto: "Si trabajaste sin estar registrado, defendemos tus derechos laborales para que recibas todas las compensaciones que te corresponden." },
            { titulo: "Accidente de trabajo: ", texto: "Si has sufrido un accidente laboral, te ayudamos a reclamar la indemnización que mereces y a asegurar tu futuro profesional."},
            { titulo: "Maltrato laboral: ", texto: "No toleres el acoso en el trabajo. Estamos aquí para asesorarte y tomar las acciones legales necesarias para proteger tu integridad."},
            { titulo: "Horas extras: ", texto: "Reclama el pago de tus horas extras. Hacemos valer tus derechos para que recibas la compensación justa por tu esfuerzo adicional."},
            { titulo: "Diferencias salariales: ", texto: "Defendemos tu derecho a recibir el salario completo y justo. Si existen diferencias salariales, te ayudamos a reclamarlas."},
            { titulo: "Discriminación salarial: ", texto: "La igualdad salarial es un derecho. Te apoyamos para luchar contra cualquier forma de discriminación salarial en tu lugar de trabajo."},
            { titulo: "Cambio de horario y lugar de trabajo: ", texto: "Si tu empleador cambia tus condiciones laborales sin tu consentimiento, te asesoramos para que conozcas las acciones que puedes tomar."},
            { titulo: "Acoso y persecución laboral: ", texto: "Te brindamos el apoyo legal necesario y poner fin a cualquier forma de persecución en tu entorno laboral."}
        ],
        imagenDetalle: "/detalle-laboral.jpg"
    },
    {
        id: "accidentes-viales",
        imagen: "/icono-accidentes.png",
        tituloParte1: "Accidentes",
        tituloParte2: "Viales",
        descripcion: "Proporcionamos una atención legal minuciosa, enfocada en defender los derechos de quienes han sufrido un siniestro vial.",
        detalles: [
            { titulo: "Reclamo de indemnización: ", texto: "Te ayudamos a reclamar la indemnización justa por los daños y perjuicios sufridos en un accidente de tránsito, ya sean materiales, físicos o morales." },
            { titulo: "Lesiones personales: ", texto: "Si has sufrido lesiones en un accidente de tráfico, te asistimos en el reclamo de los gastos médicos, rehabilitación y compensación por daños permanentes."},
            { titulo: "Indemnización por muerte en accidente: ", texto: "En casos de fallecimiento por accidente de tránsito, brindamos apoyo legal a los familiares para reclamar la compensación que les corresponde."},
            { titulo: "Accidentes con vehículos de transporte público: ", texto: "Si sufriste un accidente en un vehículo de transporte público, te ayudamos a reclamar la compensación correspondiente por las lesiones y pérdidas sufridas."},
            { titulo: "Asistencia en juicios por accidentes de tránsito: ", texto: "Te representamos en procesos judiciales derivados de accidentes de tránsito, asegurando una defensa sólida y orientada a obtener los mejores resultados."}
        ],
        imagenDetalle: "/detalle-accidente-transito.jpeg"
    },
    {
        id: "asesoramiento-empresarial",
        tituloParte1: "Asesoramiento",
        tituloParte2: "Empresarial",
        imagen: "/icono-asesoramiento.png",
        descripcion: "Proporcionamos asesoramiento jurídico integral para empresas, asegurando el cumplimiento normativo y la protección de sus intereses comerciales.",
        detalles: [
            { titulo: "Auditoría laboral: ", texto: "Realizamos auditorías laborales exhaustivas para identificar posibles incumplimientos y ayudarte a implementar soluciones que eviten sanciones o litigios futuros." },
            { titulo: "Redacción de contratos de trabajo: ", texto: "Te asesoramos en la redacción y revisión de contratos de trabajo, asegurando que estén alineados con la normativa laboral y protejan a tu empresa frente a posibles reclamos."},
            { titulo: "Litigios: ", texto: "Defendemos los intereses de tu empresa en litigios laborales, con un enfoque estratégico y orientado a resultados."},
            { titulo: "Compliance laboral: ", texto: "Implementamos programas de compliance laboral para asegurar que tu empresa cumpla con todas las regulaciones vigentes y evite sanciones."}
        ],
        imagenDetalle: "/detalle-asesoramiento-empresarial.jpeg"
    },
    {
        id: "sucesiones",
        tituloParte1: "Sucesiones",
        imagen: "/icono-sucesiones.png",
        descripcion: "Nuestro equipo te asesora y acompaña en cada paso del proceso sucesorio, asegurando que la distribución de bienes se realice conforme a la ley.",
        detalles: [
            { titulo: "Sucesiones con o sin testamento: ", texto: "Te guiamos en el proceso de sucesión, ya sea con o sin testamento, para garantizar que se respete la voluntad del fallecido y los derechos de los herederos." },
            { titulo: "Planificación hereditaria: ", texto: "Planifica tu herencia de forma eficiente y equitativa. Te ayudamos a organizar tus bienes para que se repartan según tus deseos y la normativa vigente."},
            { titulo: "Inscripción del tracto abreviado: ", texto: "Facilitamos la inscripción mediante tracto abreviado, asegurando que la transmisión de bienes hereditarios sea rápida y sin complicaciones."}
        ],
        imagenDetalle: "/detalle-sucesiones.jpeg"
    },
    {
        id: "derecho-penal",
        tituloParte1: "Derecho",
        tituloParte2: "Penal",
        imagen: "/icono-derecho-penal.png",
        descripcion: "Defendemos tus intereses en casos penales con un enfoque estratégico, trabajando para minimizar las consecuencias legales y proteger tus derechos.",
        detalles: [
            { titulo: "Defensa penal: ", texto: "Ofrecemos una defensa penal sólida y estratégica, protegiendo tus derechos en cada etapa del proceso." },
            { titulo: "Eximición de prisión: ", texto: "Evaluamos los riesgos y te asesoramos sobre las mejores opciones legales para evitar la prisión preventiva y obtener tu eximición de prisión."},
            { titulo: "Excarcelación: ", texto: "Te asistimos en la obtención de la excarcelación, para cumplir con el objetivo de que puedas enfrentar el proceso judicial en libertad."},
            { titulo: "Querella: ", texto: "Te asesoramos y representamos en la presentación de querellas penales, defendiendo tus derechos y asegurando que los responsables enfrenten la justicia."},
            { titulo: "Recursos: ", texto: "Somos especialistas en la presentación de recursos ante decisiones judiciales adversas."}
        ],
        imagenDetalle: "/detalle-penal.jpeg"
    }
]


const obtenerDatosCardsAreas = () => {
    return new Promise((resolve, reject) => {
        resolve(datosCardsAreas)
    });
}

export default obtenerDatosCardsAreas


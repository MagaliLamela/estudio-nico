import React, { useState } from 'react';
import "./contacto.css";
import db from "../../db/db.js";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { init, send } from 'emailjs-com';
import { Helmet } from 'react-helmet';

init("aDyko9QAETnoogJeA");

const Contacto = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        consulta: ""
    });

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const consulta = {
            cliente: { ...datosForm },
            fecha: Timestamp.fromDate(new Date())
        };

        try {
            // Envía la consulta a Firestore
            const consultasRef = collection(db, "consultas");
            await addDoc(consultasRef, consulta);

            // Envía el correo
            await send("pagina-web4581", "template_rao3efz", {
                from_name: datosForm.nombre,
                from_email: datosForm.email,
                from_telefono: datosForm.telefono,
                from_message: datosForm.consulta
            }).then((response) => {
                console.log('Email enviado con éxito:', response.status);
            }).catch((err) => {
                console.error('Error al enviar el email:', err);
            });
            

            // Limpiar el formulario
            setDatosForm({
                nombre: "",
                telefono: "",
                email: "",
                consulta: ""
            });
            // Mostrar el mensaje de éxito
            toast.success("Consulta enviada con éxito!");
        } catch (error) {
            // Manejo de errores
            console.error("Error al agregar el documento: ", error);
            // Notificar al usuario sobre el error
            toast.error("Ocurrió un error al enviar la consulta. Inténtalo de nuevo.");
            throw error;  // Lanza el error para manejarlo más arriba si es necesario
        }
    };

    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.962798779461!2d-58.39577510321041!3d-34.6051022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb12cc97a10d%3A0xf71e3948a36fc54f!2sBerraondo%2C%20Galarza%20%26%20Rocha%20Estudio%20Jur%C3%ADdico!5e0!3m2!1ses-419!2sar!4v1727388922948!5m2!1ses-419!2sar";

    return (
        <div className='contacto'>
             <Helmet>
                <title>Contacto | Estudio Berraondo, Galarza & Rocha</title>
                <meta name="description" content="Reservá tu cita con nuestros abogados expertos. Consulta legal en derecho laboral, penal y civil." />
                <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES, CONTACTO" />
            </Helmet>
            <form onSubmit={handleSubmitForm}>
                <h1><span className='spanContacto1'>Con<span className='spanContacto2'>t</span></span><span className='spanContacto2'>ácta</span>nos</h1>

                <label htmlFor="nombre" className="visually-hidden">Nombre*</label>
                <input type="text" id="nombre" name='nombre' placeholder="Nombre*" value={datosForm.nombre} onChange={handleChangeInput} required />

                <label htmlFor="telefono" className="visually-hidden">Teléfono*</label>
                <input type="tel" id="telefono" name='telefono' placeholder="Teléfono*" value={datosForm.telefono} onChange={handleChangeInput} required />

                <label htmlFor="email" className="visually-hidden">Correo electrónico*</label>
                <input type="email" id="email" name='email' placeholder="Correo electrónico*" value={datosForm.email} onChange={handleChangeInput} required />

                <label htmlFor="consulta" className="visually-hidden">Consulta*</label>
                <textarea id="consulta" cols="30" rows="10" name='consulta' placeholder="Escribe tu consulta.." value={datosForm.consulta} onChange={handleChangeInput} required></textarea>


                <input className="botonFormulario" type="submit" value="ENVIAR" />
            </form>

            <div className="mapaLocales">
                <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Ubicación del Estudio Jurídico"
                ></iframe>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Contacto;

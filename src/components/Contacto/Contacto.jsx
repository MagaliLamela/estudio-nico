import React from 'react'
import "./contacto.css"

const Contacto = () => {

    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.961095365186!2d-58.3934538236301!3d-34.60514527295386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac567612e09%3A0xd3c44ff2ece2f7b5!2sEstudio%20Jur%C3%ADdico!5e0!3m2!1ses-419!2sar!4v1723307247514!5m2!1ses-419!2sar";


    return (
        <div className='contacto'>
            <form>
                <h1><span>Cont</span>actanos</h1>

                <input type="text" id="nombre" name='nombre' placeholder="Nombre" required />

                <input type="tel" id="telefono"
                    name='telefono' placeholder="Teléfono" required />

                <input type="email" id="email" name='email' placeholder="Correo electrónico" required />

                <textarea id="consulta" cols="30" rows="10" name='consulta' placeholder="Escribe tu consulta.." required></textarea>

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
                ></iframe>
            </div>
        </div>

    )
}

export default Contacto
// components/NotFound/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./notfound.css"

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <div className='contenedorNotFound'>
            <h1 className='h1NotFound'>Página No Encontrada</h1>
            <p className='parrafoNotFound'>Lo sentimos, la página que buscas no existe.</p>
            <button className='btnNotFound' onClick={handleGoHome}>
                Volver al Inicio
            </button>
        </div>
    );
};

export default NotFound;

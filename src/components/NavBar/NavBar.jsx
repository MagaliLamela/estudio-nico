import logo from "../../assets/logo.jpeg";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = location.pathname === "/";
    const isNosotrosPage = location.pathname === "/nosotros";

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const navbar = document.querySelector('.barraNavegacion');
        if (isMenuOpen) {
            navbar.classList.add('menu-abierto'); // Agrega clase para el fondo gris
        } else {
            navbar.classList.remove('menu-abierto'); // Quita la clase al cerrar
        }
    }, [isMenuOpen]);

    return (
        <header className="sticky-top">
            <nav className={`navbar navbar-expand-lg navbar-dark container-fluid barraNavegacion ${isMenuOpen ? 'show' : ''} ${
                    (isHomePage || isNosotrosPage) && !isScrolled ? 'transparent' : 'solid'
                } ${isHomePage || isNosotrosPage ? 'fixed-nav' : 'static-nav'}`}>
                <Link to={"/"} className="navbar-brand">
                    <img className="logo" src={logo} alt="Logo del Estudio" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleMenuToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse menuNavegacion justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/areas-de-practica"} onClick={() => setIsMenuOpen(false)}>Áreas de Práctica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/nosotros"} onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contacto"} onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;



import logo from "../../assets/logo.jpeg"
import "./navbar.css"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) { // Cambia este valor según tus necesidades
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = location.pathname === "/";
    const isNosotrosPage = location.pathname === "/nosotros"

    return (
        <header className="sticky-top">
            <nav className={`navbar navbar-expand-lg navbar-dark container-fluid barraNavegacion  ${
                    isHomePage || isNosotrosPage ? (isScrolled ? 'solid' : 'transparent') : 'solid'
                } ${isHomePage || isNosotrosPage ? 'fixed-nav' : 'static-nav'}`}>
                <Link to={"/"} className="navbar-brand">
                    <img className="logo" src={logo} alt="Logo del Estudio" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menuNavegacion justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/areas-de-practica"}>Áreas de Práctica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/nosotros"}>Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default NavBar


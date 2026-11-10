import { Link } from "react-router";
import "./Header.css";

function Header() {
    return (
        <header className="header">

            <div className="eslogan">
                <p>
                    TU CINE, <br /> TUS PELICULAS
                </p>
            </div>

            <div className="titulo">
                <h1>CINEMASTER</h1>
            </div>

            <div className="comprar">
                <Link
                    to="/comprar-ticket"
                    className="comprarRef"
                >
                    COMPRA TUS ENTRADAS ONLINE
                </Link>
            </div>

            <div className="indicadorScroll">
                <div className="flecha"></div>
            </div>

        </header>
    );
}

export default Header;
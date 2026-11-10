import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="eslogan">
                <p>TU CINE, <br /> TUS PELICULAS</p>
            </div>
            <div className="titulo">
                <h1>CINEMASTER</h1>
            </div>
            <div className="comprar">
                <a href="#" className="comprarRef"> {/*DESPUES SE BORRA, CUANDO IMPLEMENTEMOS REACT ROUTER*/}
                    COMPRA TUS ENTRADAS ONLINE
                </a>
            </div>
            <div className="indicadorScroll">
                <div className="flecha"></div>
            </div>
        </header>
    );
}

export default Header;
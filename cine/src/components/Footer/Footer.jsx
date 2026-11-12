import "./Footer.css";

// Footer reutilizable del sitio.
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contenido">

                <div className="footer-marca">
                    <h3>CineMaster</h3>

                    <p>
                        Tu próxima película comienza acá.
                    </p>
                </div>


                <div className="footer-info">

                    <p>
                        Proyecto desarrollado por Grupo 4
                    </p>

                    <p>
                        © 2026 CineMaster · Todos los derechos reservados
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
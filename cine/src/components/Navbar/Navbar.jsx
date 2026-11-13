import "./Navbar.css";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <p className="navbar-logo">
                CINEMASTER
            </p>
            <Link to='./mi-cuenta'>
                Mi Cuenta
            </Link>
        </nav>
    );
}

export default Navbar;
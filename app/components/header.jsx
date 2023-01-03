import { Link } from "@remix-run/react";
import Navegacion from "./navegacion";
import Logo from "../../public/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;

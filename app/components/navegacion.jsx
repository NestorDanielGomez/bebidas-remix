import { Link, useLocation } from "@remix-run/react";
import imagenCarrito from "../../public/img/carrito.png";
function Navegacion() {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}>
        Nosotros
      </Link>
      <Link
        to="/bebidas"
        className={location.pathname === "/bebidas" ? "active" : ""}>
        Tienda
      </Link>
      <Link
        to="/posts"
        className={location.pathname === "/posts" ? "active" : ""}>
        Post
      </Link>
      <Link to="/carrito">
        <img src={imagenCarrito} alt="carrito"></img>
      </Link>
    </nav>
  );
}

export default Navegacion;

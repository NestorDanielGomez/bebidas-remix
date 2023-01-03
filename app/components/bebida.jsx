import { Link } from "@remix-run/react";

function Bebida({ bebida }) {
  const { nombre, descripcion, precio, imagen, url } = bebida;
  return (
    <div className="bebida">
      <img
        src={imagen.data.attributes.formats.thumbnail.url}
        alt={`Imagen bebida ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
        <Link className="enlace" to={`/bebidas/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Bebida;

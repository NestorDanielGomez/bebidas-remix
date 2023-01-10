import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getBebida } from "~/models/bebidas.server";

export async function loader({ request, params }) {
  const { bebidaURL } = params;
  const bebida = await getBebida(bebidaURL);

  if (bebida.data.length === 0) {
    throw new Response(``, {
      status: 404,
      statusText: `Guitarra no encontrada`,
    });
  }

  return bebida;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: ` Guitarra no encontrada`,
      description: `Venta de bebidas, bebida no encontrada`,
    };
  }

  return {
    title: `Bebidas Remix | ${data.data[0].attributes.nombre}`,
    description: `Venta de bebidas ${data.data[0].attributes.nombre}`,
  };
}

function Bebida() {
  const { agregarAlCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(0);
  const bebida = useLoaderData();
  const { nombre, descripcion, imagen, precio } = bebida.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debe seleccionar una cantidad");
      return;
    }
    const bebidaSeleccionada = {
      id: bebida.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarAlCarrito(bebidaSeleccionada);
  };

  return (
    <div className="bebida">
      <img className="imagen" src={imagen.data.attributes.url} alt={nombre} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <form action="" className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            value="0"
            onChange={(e) => setCantidad(parseInt(e.target.value))}>
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Bebida;

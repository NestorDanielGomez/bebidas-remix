import { useLoaderData } from "@remix-run/react";
import { getBebida } from "~/models/bebidas.server";
import styles from "~/styles/bebidas.css";

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

export function links() {
  return [
    {
      rel: `stylesheet`,
      href: styles,
    },
  ];
}

function Bebida() {
  const bebida = useLoaderData();
  const { nombre, descripcion, imagen, precio } = bebida.data[0].attributes;

  return (
    <main className="contenedor bebida">
      <img className="imagen" src={imagen.data.attributes.url} alt={nombre} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
}

export default Bebida;

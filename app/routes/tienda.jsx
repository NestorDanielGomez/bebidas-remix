import { useLoaderData } from "@remix-run/react";
import { getBebidas } from "~/models/bebidas.server";
import Bebida from "~/components/bebida";
import styles from "~/styles/bebidas.css";

export function meta() {
  return {
    title: `Bebidas Remix | Tienda de bebidas`,
    description: `Nuestro catalogo de bebidas`,
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

export async function loader() {
  const bebidas = await getBebidas();
  return bebidas.data;
}

function Tienda() {
  const bebidas = useLoaderData();
  return (
    <div className="contenedor">
      <h2 className="heading">Nuestra coleccion</h2>
      {bebidas.length && (
        <div className="bebidas-grid">
          {bebidas.map((bebida) => (
            <Bebida key={bebida?.id} bebida={bebida?.attributes} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tienda;

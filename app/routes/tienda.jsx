import { useLoaderData } from "@remix-run/react";
import { getBebidas } from "~/models/bebidas.server";
import ListadoBebidas from "~/components/listado-bebidas";

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
      <ListadoBebidas bebidas={bebidas} />
    </div>
  );
}

export default Tienda;

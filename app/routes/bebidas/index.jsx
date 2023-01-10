import { useLoaderData } from "@remix-run/react";
import { getBebidas } from "~/models/bebidas.server";
import ListadoBebidas from "~/components/listado-bebidas";

export function meta() {
  return {
    title: `Bebidas Remix | Tienda de bebidas`,
    description: `Nuestro catalogo de bebidas`,
  };
}

export async function loader() {
  const bebidas = await getBebidas();
  return bebidas.data;
}

function Tienda() {
  const bebidas = useLoaderData();
  return <ListadoBebidas bebidas={bebidas} />;
}

export default Tienda;

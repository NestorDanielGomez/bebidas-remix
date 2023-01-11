import { useLoaderData } from "@remix-run/react";

import { getBebidas } from "~/models/bebidas.server";
import { getPosts } from "~/models/blogs.server";
import { getPromocion } from "~/models/promocion.server";
import ListadoBebidas from "~/components/listado-bebidas";
import ListadoPosts from "~/components/listado-posts";
import Promocion from "~/components/promocion";
import stylesBebidas from "~/styles/bebidas.css";
import stylesBlog from "~/styles/blog.css";
import stylesPromocion from "~/styles/promocion.css";
export function meta() {}

export function links() {
  return [
    {
      rel: `stylesheet`,
      href: stylesBebidas,
    },
    {
      rel: `stylesheet`,
      href: stylesBlog,
    },
    {
      rel: `stylesheet`,
      href: stylesPromocion,
    },
  ];
}

export async function loader() {
  const [bebidas, posts, promocion] = await Promise.all([
    getBebidas(),
    getPosts(),
    getPromocion(),
  ]);

  return {
    bebidas: bebidas.data,
    posts: posts.data,
    promocion: promocion.data,
  };
}

function Index() {
  const { bebidas, posts, promocion } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoBebidas bebidas={bebidas} />
      </main>
      <Promocion promocion={promocion.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;

import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/blogs.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ request, params }) {
  const { postURL } = params;
  const post = await getPost(postURL);

  if (post.data.length === 0) {
    throw new Response(``, {
      status: 404,
      statusText: `Post no encontrado`,
    });
  }

  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: ` Post no encontrado`,
      description: `Venta de bebidas, Post no encontrado`,
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

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`imagen de ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}

export default Post;

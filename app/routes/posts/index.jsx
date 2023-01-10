import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import { getPosts } from "~/models/blogs.server";

export function meta() {
  return {
    title: `Bebidas Remix | Tienda de bebidas`,
    description: `Nuestro catalogo de bebidas`,
  };
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export default function Blog() {
  const posts = useLoaderData();

  return <ListadoPosts posts={posts} />;
}

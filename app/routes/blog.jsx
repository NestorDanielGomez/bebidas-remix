import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import { getPosts } from "~/models/blogs.server";
import styles from "~/styles/blog.css";

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
  const posts = await getPosts();
  return posts.data;
}

export default function Blog() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <main className="contenedor">
      <h2 className="heading">titulo</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
}

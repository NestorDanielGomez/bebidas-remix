import {
  Meta,
  Links,
  Link,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
export function meta() {
  return {
    charset: `utf-8`,
    title: `Bebidas remix`,
    viewport: "width=device-width,initial-scale=1",
  };
}

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@100;400;700;900&display=swap" rel="stylesheet"></link>

export function links() {
  return [
    {
      rel: `stylesheet`,
      href: `https://necolas.github.io/normalize.css/8.0.1/normalize.css`,
    },
    { rel: `preconnect`, href: `https://fonts.googleapis.com` },
    {
      rel: `preconnect`,
      href: `https://fonts.gstatic.com`,
      crosOrigin: "true",
    },
    {
      rel: `stylesheet`,
      href: `https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@100;400;700;900&display=swap`,
    },
    {
      rel: `stylesheet`,
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

//  <Scripts /> para que no flashee toda la pagina cuando recargo
function Document({ children }) {
  return (
    <>
      <html lang="es">
        <head>
          <Meta />
          <Links />
          <title>Bebidas - remix</title>
        </head>
        <Header />

        <body>{children}</body>
        <Footer />
        <Scripts />
        <LiveReload />
      </html>
    </>
  );
}

/*manejo de errores*/
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Volver a la Pagina principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Volver a la Pagina principal
      </Link>
    </Document>
  );
}

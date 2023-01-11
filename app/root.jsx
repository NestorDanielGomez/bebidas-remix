import { useState, useEffect } from "react";
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
      crosorigin: "true",
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
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(`carrito`)) ?? []
      : null;
  const [carrito, setCarrito] = useState(carritoLS);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (bebida) => {
    if (carrito.some((bebidaState) => bebidaState.id === bebida.id)) {
      //itero el arreglo y busco el elemento duplicado
      const carroActualizado = carrito.map((bebidaEstado) => {
        if (bebidaEstado.id === bebida.id) {
          //rescribo solo la cantidad
          bebidaEstado.cantidad = bebida.cantidad;
          //sumo a la cantidad previa el valor que volvio a elegir
          //bebidaEstado.cantidad += bebida.cantidad;
        }
        return bebidaEstado;
      });
      setCarrito(carroActualizado);
    } else {
      setCarrito([...carrito, bebida]);
    }
  };

  const actualizarCantidad = (bebida) => {
    const carritoActualizado = carrito.map((bebidaState) => {
      if (bebidaState.id === bebida.id) {
        bebidaState.cantidad = bebida.cantidad;
      }
      return bebidaState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarBebida = (id) => {
    const carritoActualizado = carrito.filter(
      (bebidaState) => bebidaState.id !== id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarAlCarrito,
          carrito,
          actualizarCantidad,
          eliminarBebida,
        }}
      />
    </Document>
  );
}

//  <Scripts /> para que no flashee toda la pagina cuando recargo
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
        <title>Bebidas - remix</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
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

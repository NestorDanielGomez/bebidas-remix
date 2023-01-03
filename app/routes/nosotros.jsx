import Imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: `Bebidas Remix | Nosotros`,
    description: `venta de bebidas`,
  };
}

export function links() {
  return [
    {
      rel: `stylesheet`,
      href: styles,
    },
    {
      rel: `preload`,
      href: Imagen,
      as: `image`,
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="imagen nosotros" />
        <div>
          <p>
            s simplemente el texto de relleno de las imprentas y archivos de
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500, cuando un impresor (N. del T. persona
            que se dedica a la imprenta) desconocido usó una galería de textos y
            los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando ese
          </p>
          <p>
            s simplemente el texto de relleno de las imprentas y archivos de
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500, cuando un impresor (N. del T. persona
            que se dedica a la imprenta) desconocido usó una galería de textos y
            los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando ese
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;

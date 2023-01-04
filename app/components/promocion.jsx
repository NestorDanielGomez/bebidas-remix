import React from "react";

function Promocion({ promocion }) {
  const { descripcion, imagen, titulo } = promocion;
  return (
    <section className="promocion">
      <style jsx="true">
        {`
          .promocion {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className="contenedor promocion-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{descripcion}</p>
        </div>
      </div>
    </section>
  );
}

export default Promocion;

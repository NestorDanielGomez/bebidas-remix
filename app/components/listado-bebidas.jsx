import Bebida from "./bebida";
function ListadoBebidas({ bebidas }) {
  return (
    <>
      {" "}
      <h2 className="heading">Nuestra coleccion</h2>
      {bebidas.length && (
        <div className="bebidas-grid">
          {bebidas.map((bebida) => (
            <Bebida key={bebida?.id} bebida={bebida?.attributes} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListadoBebidas;

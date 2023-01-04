
export async function getPromocion(url){
     const respuesta = await fetch(
    `${process.env.API_URL}/promocion?populate=imagen`
  );
return await respuesta.json();

}
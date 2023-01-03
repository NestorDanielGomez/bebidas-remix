export async function getBebidas(){
     const respuesta = await fetch(
    `${process.env.API_URL}/bebidas?populate=imagen`
  );
return await respuesta.json();

}

export async function getBebida(url){

    const respuesta = await fetch(
    `${process.env.API_URL}/bebidas?filters[url]=${url}&populate=imagen`
  );
  return await respuesta.json()
}
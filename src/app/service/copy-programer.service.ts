/*  
    Hola Futuro programador o desarrollador de codigo si estas leyendo esto es porque te toco 
    dar manteminiento o actualizar la pagina te deseo la mejor de las suertes posibles ya que
    esto fue desarrollado  con angular 14 de aqui te puedo mencionar que todo esta bien en el 
    desarrollo  de  esto  fue  hecho por Aldo Yahir Cruz Garcia (desarrollador back-end), por 
    Johanna Mendoza Juárez, Estrella Ninandi Rosas Sandoval   (administradoras y diseñodoras)
    su servidor que redacto esto Jesús Sánchez Hernández ( desarrollador de front-end ) si en 
    algun momento  deseas contactarnos  puedes consultar  este codigo  aqui puedes  verificar
    algunos datos o puntos si es que no te dieron la informacion completa:
    
    (Aldo Yahir Cruz Garcia) https://github.com/YahirDev02
    (Jesús Sánchez Hernández) https://github.com/sanx2140602hj

    Espero tengas una mejor vision y parametros con este proyecto te deseamos lo mejor.

    atte. CodeCrafters
*/
// Definir la lista de nombres
const nombres: string[] = [
  "Estrella Ninandi Rosas Sandoval.",
    "Aldo Yahir Cruz Garcia.",
    "Johanna Mendoza Juárez.",
    "Jesús Sánchez Hernández."
];

// Función para obtener un nombre aleatorio
export function obtenerNombreAleatorio(): string {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[indiceAleatorio];
}

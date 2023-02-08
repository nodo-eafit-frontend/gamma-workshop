const news = [
    {
    id: '1',
    image: "../assets/imagenes/thelast.jfif",
    tittle: 'El éxito de "The Last of Us" es avasallador',
    description: `Estaba claro que el capítulo 3 de 'The Last of Us' iba a levantar ampollas entre los fans
    más suspicaces: su decisión de apartarse momentáneamente del viaje de Ellie y Joel y contar la historia
    de Bill y Frank, cambiando además lo que vimos en el juego, no iba a gustar. Primero, porque el destino 
    de los dos hombres que se encuentran en el apocalipsis cambia radicalmente y en la serie brinda un rayo 
    de esperanza donde en el juego era una pesimista nota al pie.`
},
{
    id: '2',
    image: "../assets/imagenes/toyota.png",
    tittle: "Toyota tiene clarísimo su rechazo al coche eléctrico",
    description: `La apuesta es arriesgada y los resultados los empezaremos a conocer muy pronto.
     Toyota no cree en el coche eléctrico. Está segura de que el híbrido (enchufable o no) es una pieza clave
      no sólo en una transición al coche eléctrico, también en el futuro a largo plazo. La primera víctima de 
      esta decisión es el Toyota bZ4x, su primer coche eléctrico.`
}
 
]



const section = document.querySelector("section")

news.forEach(element => {
    createCard(element)
});
    


function createCard(object){
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "main-card")
    newDiv.setAttribute("id", object.id);

    const newTittle = document.createElement("h2")
    newTittle.innerHTML = object.tittle;

    const newParrafo = document.createElement("p")
    newParrafo.innerHTML = object.description;

    const newButton = document.createElement("button")
    newButton.innerHTML = "Leer más..";

    const newImage = document.createElement("img")
    newImage.setAttribute("src", object.image);

    
    newDiv.appendChild(newTittle);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newParrafo);
    newDiv.appendChild(newButton);
    section.appendChild(newDiv);


}
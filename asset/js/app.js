
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras  = [];
var formulario = document.getElementById("bitacora");

/* ¿Que cotiene la variable fromulario? R// Contiene los elemento con
id "bitacora" */



/* ¿Qué hace el método evt.preventDefault() ? R// Lo que hace
es cancelar el evento, si es que este se puede cancelar*/

/*¿Qué es lo que contiene formulario[x]? R// Contiene un objeto
llamado bitacora */

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*
¿Qué contienen las variables tr y td ? R//tr es un elemento creado 
que contiene el elemento de td y td contiene el contenido

¿Qué contienen la variable content ? R// Obtiene el texto que se encuentra
en el cuadro

¿Qué valor tendra tbody al finalizar la iteración? R//

Describa en pocas palabras lo que realizara esta función R//
La funcion lo que hara es crear un elemento y ponerlo en la tabla
*/

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
/*¿Qué es lo que hace .firstChild? R//Retorna el primer nodo/elemento

Después de realizar el while ¿Comó quedara el elemento tbody ? R//
Quedara vacio
*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
   })
}

/* */

const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
} 
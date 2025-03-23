
/* MANEJO DEL DOM */

//capturar elementos del DOM

document.getElementById("id_element")                   //captura un id
document.getElementsByClassName("class_element")        //captura una clase

document.querySelector("any_element")                   //captura una clase (.class), id(#id), elemento u otro
document.querySelectorAll("all_of_element")             //captura todos los elementos de unna clase (.class) o todos de un elemento


//===========================================================================================================================

//modificar elementos del DOM

elemento.outerHTML = "<h2> que cosas </h2>" 
elemento.innerHTML = "que cosas <strong> bonitas </strong>" 

//modificar contenido de elementos del DOM

elemento.textContent = "que cosas bonitas" 

//modificar estilo CSS de elementos del DOM

elemento.style.padding = "18px"


//===========================================================================================================================

//modificar atributos del DOM

elemento.getAttribute("src")                                  //captura el atributo del elemento
elemento.setAttribute("alt", "description of the image")      //crea un nuevo atributo si no existe o modifica el valor de uno ya creado
elemento.hasAttribute("src")                                  //muestra true/false si existe el atributo o no
elemento.removeAttribute("alt")                               //elimina el atributo  


//===========================================================================================================================

//crear un nuevo elemento en el DOM

document.createElement("div")                   //crea un nuevo elemento pero no esta en el HTML
document.createTextNode("text")                 //crea un nodo de solo texto (se puede agregar a un p vacio por ejemplo)
elemento.appentChild(variable)                  //coloca a "variable" como ultimo hijo en el HTML
elemento.removeChild(variable)                  //elimina a "variable"
elemento.replaceChild(newChild, oldChild)       //reemplaza el hijo existente por otro

//crear HTML a partir de texto y evitar crear nodos individuales

body.insertAdjacentHTML("beforebegin", "<p> ejemplo </p>")      //inserta el HTML antes del elemento de referencia
body.insertAdjacentHTML("afterbegin", "<p> ejemplo </p>")       //inserta el HTML como primer hijo del elemento de referencia
body.insertAdjacentHTML("beforeend", "<p> ejemplo </p>")        //inserta el HTML como ultimo hijo del elemento de referencia
body.insertAdjacentHTML("afterend", "<p> ejemplo </p>")         //inserta el HTML despues del elemento de referencia  


//============================================================================================================================

//acceder a los padre, hijos y hermanos de elementos del DOM

elemento.children   //devuelve una HTMLCollection SOLO con los nodos elemento hijo (elementos HTML)
elemento.childNodes //devuelve una NodeList que contiene todos los nodos hijo, nodos de texto, (elementos HTML) y nodos vacíos.

elemento.firstChild                 //captura el primer elemento hijo de "elemento"
elemento.lastChild                  //captura el ultimo elemento hijo de "elemento"

hijo.parentNode                     //captura el elemento padre de "hijo"

hijo.previousSibling                //captura el hermano anterior de "hijo"
hijo.nextSibling                //captura el hermano posterior de "hijo"

hijo.nodeName                   //muestra el nombre del nodo del elemento
hijo.nodeType                   //muestra el tipo de nodo del elemento
hijo.nodeValue                  //muestra el valor del nodo del elemento


//============================================================================================================================

elemento.classList                              //devuelve una lista con todas las clases del elemento
elemento.classList.add("new_class")             //agrega una nueva clase al elemento
elemento.classList.remove("old__class")         //elimina la clase especificada
elemento.classList.toggle("current_class")      //agrega la clase si no existe y elimina la clase si existe    
elemento.classList.contains("has_class")        //devuelve true o false acorde a si tiene la clase o no

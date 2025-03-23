
/* EVENTOS CON EL DOM */

// Eventos del ratón
element.onclick = function() {} // Clic con el ratón
element.ondblclick = function() {} // Doble clic con el ratón
element.onmousedown = function() {} // Botón del ratón presionado
element.onmouseup = function() {} // Botón del ratón liberado
element.onmousemove = function() {} // Movimiento del ratón
element.onmouseover = function() {} // El puntero del ratón se mueve sobre un elemento
element.onmouseout = function() {} // El puntero del ratón sale de un elemento
element.onmouseenter = function() {} // El puntero del ratón entra en un elemento (no se activa en hijos)
element.onmouseleave = function() {} // El puntero del ratón sale de un elemento (no se activa en hijos)
element.oncontextmenu = function() {} // Menú contextual (clic derecho)

// Eventos del teclado
document.onkeydown = function() {} // Una tecla es presionada
document.onkeyup = function() {} // Una tecla es liberada
document.onkeypress = function() {} // Una tecla que produce un carácter es presionada

// Eventos del formulario
element.onfocus = function() {} // Un elemento recibe el foco
element.onblur = function() {} // Un elemento pierde el foco
element.onchange = function() {} // El valor de un elemento ha sido cambiado
element.oninput = function() {} // El valor de un elemento es actualizado
element.onsubmit = function() {} // Un formulario es enviado
element.onreset = function() {} // Un formulario es restablecido

// Eventos de arrastre
element.ondragstart = function() {} // El usuario comienza a arrastrar un elemento
element.ondrag = function() {} // Un elemento está siendo arrastrado
element.ondragover = function() {} // Un elemento arrastrable está sobre un elemento de destino
element.ondragenter = function() {} // Un elemento arrastrable entra en un elemento de destino
element.ondragleave = function() {} // Un elemento arrastrable sale de un elemento de destino
element.ondragend = function() {} // La operación de arrastre ha finalizado
element.ondrop = function() {} // Un elemento arrastrable es soltado en un elemento de destino

// Eventos de pantalla
window.onresize = function() {} // La ventana del navegador ha sido redimensionada
window.onscroll = function() {} // La ventana del navegador ha sido desplazada

// Eventos de carga
window.onload = function() {} // El navegador ha terminado de cargar la página
window.onunload = function() {} // La página está a punto de ser descargada
window.onbeforeunload = function() {} // La página está a punto de ser descargada (puede retornar un mensaje de confirmación)

// Eventos de progreso
element.onprogress = function() {} // Se dispara periódicamente para hacer un seguimiento del progreso de una operación
element.onabort = function() {} // La operación ha sido abortada
element.onerror = function() {} // Se ha producido un error

// Eventos de animación
element.onanimationstart = function() {} // Una animación CSS ha comenzado
element.onanimationiteration = function() {} // Una animación CSS ha comenzado una nueva iteración
element.onanimationend = function() {} // Una animación CSS ha terminado

// Eventos de transición
element.ontransitionstart = function() {} // Una transición CSS ha comenzado
element.ontransitionrun = function() {} // Una transición CSS está en progreso
element.ontransitionend = function() {} // Una transición CSS ha terminado
element.ontransitioncancel = function() {} // Una transición CSS ha sido cancelada

// Eventos de selección
element.onselectstart = function() {} // El usuario está seleccionando texto
element.onselectionchange = function() {} // La selección de texto ha cambiado

// Eventos de la interfaz de usuario
window.onpopstate = function() {} // La historia de navegación ha cambiado
window.onhashchange = function() {} // La parte hash de la URL ha cambiado
window.onoffline = function() {} // El navegador ha perdido la conexión a Internet
window.ononline = function() {} // El navegador ha recuperado la conexión a Internet
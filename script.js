// Este código obtiene el elemento HTML donde se mostrará el saludo
const saludo = document.getElementById("saludo");

// Esta función devuelve el saludo adecuado según la hora del día
function obtenerSaludo() {
    // Obtenemos la hora actual
    let hora = new Date().getHours();
    // Declaramos una variable para guardar el saludo
    let mensaje = "";
    // Comparamos la hora con diferentes rangos y asignamos el saludo correspondiente
    if (hora >= 6 && hora < 12) {
        mensaje = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
        mensaje = "Buenas tardes";
    } else {
        mensaje = "Buenas noches";
    }
    // Devolvemos el saludo
    return mensaje;
}

// Esta función cambia el color de fondo de la página según el saludo
function cambiarColor() {
    // Obtenemos el saludo actual
    let mensaje = saludo.textContent;
    // Declaramos una variable para guardar el color
    let color = "";
    // Comparamos el saludo con diferentes opciones y asignamos el color correspondiente
    if (mensaje === "Buenos días") {
        color = "skyblue";
    } else if (mensaje === "Buenas tardes") {
        color = "orange";
    } else {
        color = "navy";
    }
    // Cambiamos el color de fondo del cuerpo de la página
    document.body.style.backgroundColor = color;
}

// Esta función muestra el saludo en el elemento HTML y llama a la función cambiarColor
function mostrarSaludo() {
    // Obtenemos el saludo usando la función obtenerSaludo
    let mensaje = obtenerSaludo();
    // Asignamos el saludo al contenido del elemento HTML
    saludo.textContent = mensaje;
    // Llamamos a la función cambiarColor
    cambiarColor();
}

// Llamamos a la función mostrarSaludo cuando se carga la página
window.onload = mostrarSaludo;

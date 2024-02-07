let numeroSecreto = generarNumeroSecreto(); //Declaramos la variable que va a contener la función. Es decir, lo que retorne la función se guardará en la variable.
let intentos = 0;

console.log(numeroSecreto);

//EDITAR EL TITULO PRINCIPAL DE ""
//Una función puede recibir parámetros, y puede ser leída en cualquier momento.
//En este caso, esta función se utilizará para un h1,h2,h3,etc. y no sólo para uno de estos. Las últimas lineas manda a llamar la función.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    //document.querySelector(elemento): Buscará un elemento en el documento HTML que tenga el ID "elemento" y lo devolverá. Si el selector no especificado no coincide con ningún elemento en el documento, devolverá un null.
    //En este caso buscará dicho elemento (h1, p, etc) y lo almacenerá en la variable elemento HTML.

    elementoHTML.innerHTML = texto; //Luego se actualiza el contenido HTML interno (h1.innerHTML) con el valor especificado en la variable texto.
    return; //No retorna nada.
}

//Aqui verificamos el valor insertado con el valor secreto.
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Se obtiene el valor y todos los atributos de un elemento HTML con el id "valorUsuario" utilizando el "documento.getElementById('valorUsuario')". El valor recuperado es en formato de texto. Luego, 'parseInt()' se usa para convertir este valor de texto a un número entero. Después todo esto lo alamacena en la variable 'numeroDeUsuario'.
    //El método ".value" es un propiedad de los elementos del DOM (Document Objet Model) que se utiliza para obtener o establecer el valor de un elemento de formulario, como un campo de entrada de texto (`<input type="text">`), un área de texto (`<textarea>`), un campo de selección (`<select>`), etc.
    //En este caso, el ".value" nos proporciona el valor ingresado por el usuario en el campod e entrada con el ID valorUsuario.
    if (numeroDeUsuario === numeroSecreto) { //Si el numero del usuario es igual al numero secreto
        console.log('Acertaste el número!');//Mostrar mensaje
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1; //Aquí si va a retornar un número del 1 al 10, retornará la parte decimal y el +1 para ir del 1 al 10.

}

asignarTextoElemento('h1','Juego del número secreto!'); 
asignarTextoElemento('p',`Indica un número del 1 al 10`); 
//Aqui el H1 o P, es el seelector CSS que se utiliza para seleccionar el elemento <h1>
//El texto es el que se asignará al contenido del elemento <h1>
//Entonces cuando se llama a esta función, seleccionará el primer elemento <h1> en <h1> en el documento.
//1. Crear una función que muestra "¡Hola, mundo!" en la consola.

function mostrarHola() { //La función se llama mostrarHola y dentro de las llaves contienen las instrucciones que se ejecutarán cuando llame a la función
    console.log("¡Hola, mundo!"); //Imprimirá el texto.
  }
  mostrarHola(); //Llama a la función y se ejecuta lo que está dentro de las llaves.



  //2. Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
  
  function mostrarHolaNombre(nombre) { //Define la función que toma un parámetro llamado nombre.
    console.log(`¡Hola, ${nombre}!`); //Imprimirá lo que contenga el parámetro nombre, en este caso Alice.
  }
  mostrarHolaNombre("Alice");



  //3. Crear una función que recibe un número como parámetro y devuelve el doble de ese número.

  function calcularDoble(numero) { //Define la función que toma un parámetro llamado numero.
    return numero * 2; //La función multiplicará el parámetro x 2 y devuelve el resultado.
  }
  let resultadoDoble = calcularDoble(5); //Llama a la función calcularDoble con el argumento 5 y asigna el resultado a la variable creada.
  console.log(resultadoDoble);



  //4. Crear una función que recibe tres números como parámetros y devuelve su promedio.

  function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);


  //5. Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.

  function encontrarMayor(a, b) {
    return a > b ? a : b; //Se utiliza el operador ternario para comparar a y b. Si "a" es mayor que "b", devuelve "a", de lo contrariod evuelve "b".
  }

  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);


  //6. Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
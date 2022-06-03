//Esta es una variable global
var hola = "Hola";
let mundo = "Mundo";
const holaMundo = "Hola Mundo!";
//console.log(hola);

const otraFuncion = () => {
    console.log(hola);
    console.log(mundo);
    console.log(holaMundo);
}

otraFuncion();

//Podemos acceder a estas variables ya que fueron definidas en el Scope global, de esta manera podemos acceder a estos valores. Se puede reasignar un nuevo valor a las variables definidas con VAR, pero estos es una mala práctica, no así con Let ni Const, ya que saldrá un error diciendo que ya está asignada y que no se puede asignar un nuevo valor a la variable.

//Se pueden crear variables globales sin las palabras reservadas, pero es una muy mala práctica, y esta puede ser llamada en el console.log ya que la función fue llamada antes.
const helloWorld = () => {
    globalVar = "im global";
}

helloWorld();
console.log(globalVar);

//esta doble asignacion de variable es una mala practica
const otraFuncion2 = () => {
    var localVar = globalVar = "Im Global";
}

otraFuncion2();
console.log(globalVar);
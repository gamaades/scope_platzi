//Hoisting eleva nuestras declaraciones, de esta manera nuestra variable a pasa a estar al principio del documentos, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador
a = 2;
var a;
console.log(a);

console.log(a);
var a = 2;//undefined y esto pasa porque a esta declarada y asignada antes de llamarla
// JS solo utiliza hoisting en declaraciones y no en las inicializaciones.

function nombreDelPerro(nombre){
    console.log(nombre);
}

nombreDelPerro("Pillyn");

//El motor que compila nuestro código en JS antes de ser interpretado, esto significa que se ve o se lee todas las asignaciones que pasan en la memoria, se ajustan o se adaptan, según sea el caso. entonces lo que pone primeramente en la memoria que nosotros en nuestra función y desoyes va a ejecutar lo que sería la línea de código
//nuestra funcion se va a llamar person y va a tener unos metodos internos con los cuales nosotros vamos a poder obtener la infromacion de una variable o asgignarle alguna valor a esta variable, pero nunca vamos a poder hacer desde afuera.
function person () {
    let nombre = "no definido"
    return { 
        obtenerNombre: function () { 
            return nombre
        },
        modificarNombre: function (nuevoNombre) { 
            nombre = nuevoNombre;
        }
    };
};

newPerson = person();
console.log(newPerson.obtenerNombre());
newPerson.modificarNombre("Gustavo");
console.log(newPerson.obtenerNombre());
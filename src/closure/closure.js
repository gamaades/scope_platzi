//esto no es un closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`);
}

moneyBox(100);
moneyBox(1000);

const moneyBox1 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => { //aca es donde se establecera esa asignacion de adicion a nuestra variable.
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox1();
myMoneyBox(2); //2
myMoneyBox(4); //6
myMoneyBox(10); //16
// Esta es la forma de hacer Closure, y ¿que está sucediendo? que recuerda la asignación del valor anterior, esto significa que queda en la memoria el valor de 2 al pasarle un nuevo valor en este caso, la siguiente ejecución de 4 nos dará la suma de estos elementos, porque ya están usando la asignación de adición, esto significa que 2 + 4 = 6. y en el tercer llamado y nuevamente entrando en la lógica de la función, esto recuerda la asignación del ámbito en el que estaba, teniendo el valor de 6, ahora se le suma 10 quedando en 16.

const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}


//Ejemplo, Bueno quisiera empezar con comentar que me costó entender esto, tuve que ver el video 2 veces para poderlo entender, me gustaría empezar con cambiar un poco los nombres de funciones y variables por algo menos confuso.
let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3
//Si estudiamos la función papa esta tiene la declaración de la variable cantidaDeHijos y la declaración de la función crearEngendro y al final retorna la función crearEngendro, Ahora después de la declaración de la función papa viene la línea

//let traigamosHijosAlMundo = papa();
//Notese el PARENTESIS () de la función papa

//let traigamosHijosAlMundo = papa(); // <-- este paréntesis indica que la función se está ejecutando
//este paréntesis indica que la función se está ejecutando, es decir cada línea de esa función se ejecuta una a una, y si recorremos línea a línea a la función tenemos la declaración de cantidadDeHijos que vale 0 la declaración de la función crearEngendro y el retorno de esta función, así que finalmente traigamosHijosAlMundo vale lo que haya retornado la función papa que es crearEngendro (nótese que no se ejecuta la función crearEngendro sino que simplemente se retorna la referencia a ella) por ende cada vez que ejecutamos

//traigamosHijosAlMundo(1)

//realmente estamos es llamando a la función crearEngendro con todo su ámbito que es la variable cantidadDeHijos con valor de 0, y a este le suma lo que se le pase por parámetro, En la segunda ejecución de

//traigamosHijosAlMundo(1)

//no se está volviendo a correr todas las líneas de la función papa, esto ya se hizo en la asignación ( let traigamosHijosAlMundo = papa(); ), sino que realmente se está volviendo a llamar a crearEngendro() la cual había modificado su variable cantidadDeHijos en la primera llamada asi que pienso que la clave es entender que en esta asignación

//let traigamosHijosAlMundo = papa();

//se ejecutó la función papá donde se declararó la variable de dicha función (cantidadDeHijos) y la función que retorna (crearEngendro) UNA SOLA VEZ! lo que se ejecuta multiples veces es el la función crearEngendro

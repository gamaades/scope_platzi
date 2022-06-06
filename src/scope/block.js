const fruta = () => {
    if (true) {
        var fruta1 = "Manzana";
        let fruta2 = "Platano";
        const fruta3 = "Kiwi";
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
}

fruta();

//la salida por consola es 2 y 1
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//la salida por consola es 2
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);



//una funcion que trabaje sobre un loop
const otraFuncion = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
        
    }
}

otraFuncion();
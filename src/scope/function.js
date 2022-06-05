const fuits = () => {
    var fruta = "Manzana";
    console.log(fruta);
}

fuits();
console.log(fruta); //lanza un erro ya que no establecida de manera global

const otraFuncion = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;
    console.log(x);
    console.log(y);
}
// Nota, las variables reasignadas con let o const no se pueden reasignar dentro de este ambito. var si puede reasignar valores. Una buena practica
otraFuncion();
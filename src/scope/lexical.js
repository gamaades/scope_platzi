//El ambito lexico es las funciones que se ejecutan utilizado una cadena del alcance donde estaba vigente en su momento. Esto significa que nosotros estamos teniendo este valor y que podemos acceder a este mismo dentro de esta funcion porque es el alcance donde está asignado. En este caso, esta dentro de la funcion que estamos creando.
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();
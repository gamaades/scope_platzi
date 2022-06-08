

//una funcion que trabaje sobre un loop, aca vemos el ambito del bloque y el closure trabajando juntos, que esta forma nos va a permitir a nosotros manejar este ciclo de forma correcta.
const otraFuncion = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
        
    }
}

otraFuncion();

//El punto es entender que podemos crear este tipo de Closure de forma involuntaria y que debemos tener mucho cuidado a la hora de estar trabajando con este tipo de asignaciones o bloques de código que de alguna manera no controlemos y que si bien hablamos de rendimientos puedan salirse de las manos a la hora de estar construyendo y muchas veces es porque no establecimos los elementos como deben de ser correctamente.
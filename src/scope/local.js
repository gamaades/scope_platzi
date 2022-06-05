const holaMundo = () => {
    const hola = "Hola Mundo";
    console.log(hola);
}

holaMundo();
console.log(hola); //en este caso, el console log no puede acceder 

var scope = "I m global";
const functionScope = () => {
    var scope = "I am just a local";
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);

//se motrara el ultimo de los scope, ya que es la ultima de las funciones en la que se realiza el console.log
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();
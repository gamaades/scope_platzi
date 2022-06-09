var a = "Hola";

function hola() {
    let b = "Hola Mundo";
    const c = "Hola Mundo!";
    if (true) {
        let d = "Hola Mundo!!";
        debugger
    }
}

hola();


const moneyBox1 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => { //aca es donde se establecera esa asignacion de adicion a nuestra variable.
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox1();
myMoneyBox(2);
myMoneyBox(4);
myMoneyBox(10); 
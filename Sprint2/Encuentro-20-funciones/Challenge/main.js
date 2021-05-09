const cualEsMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        console.log("el " + numero1 + " es mayor que " + numero2 + ".");
    } else if (numero1 < numero2) {
        console.log(`el ${numero2} es mayor que ${numero1}.`);
    } else {
        console.log('los numeros son iguales');
    }
}

const cualEsMenor = (numero1, numero2, numero3) => {
    let resultado;

    if (numero1 <= numero2 && numero1 <= numero3) {
        resultado = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        resultado = numero2;
    } else {
        resultado = numero3;
    }

    return resultado;
}

cualEsMayor(8, 20);
let numeroMenor = cualEsMenor(5,7,2);
console.log(numeroMenor);

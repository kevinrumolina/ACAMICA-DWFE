const numero1 = parseInt(prompt("digite el primer numero a comparar"));
const numero2 = parseInt(prompt("digite el segundo numero a comparar"));

if (numero1 > numero2) {
    console.log("el " + numero1 + " es mayor que " + numero2 + ".");
} else if (numero1 < numero2) {
    console.log(`el ${numero2} es mayor que ${numero1}.`);
} else {
    console.log('los numeros son iguales');
}
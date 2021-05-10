/*let prueba1 = 1;
while (prueba1 <= 10) {
    console.log(prueba1);
    prueba1 += 1;
}
do {
    prueba1 -= 1;
    console.log(prueba1);
} while (prueba1 >= 1);*/


for (let i=1; i<=10; i++) {
    console.log(i);
}
for (let i=10; i>=1; i--) {
    console.log(i);
}
for (let i=0; i<=30; i++) {
    if(i%2 === 0) {
        console.log("emparedado");
    }
}
const repetir = iteraciones => {
    for (let i = 0; i < iteraciones; i++) {
        console.log(i+1);
    }
}
repetir(10);

const repetirMensaje = (n, mensaje) => {
    for (let i = 0; i < n; i++) {
        console.log(mensaje);
    }
}

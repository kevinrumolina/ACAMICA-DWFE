const capacidadTasa = 300;
const cantidadAgua = 280;
const cantidadCafe =  30;
const azucar = true;

console.log("Preparando el cáfe");
if (capacidadTasa < cantidadAgua) {
    console.log("Lo siento, es mucha agua");
} else {
    if (cantidadCafe > 50) {
        console.log("El café esta quedando intenso");
    } else {
        console.log("Tendrá un sabor suave");
    }

    if (azucar === true) {
        console.log("Con un poco de azúcar");
    } else {
        console.log("Cáfe sin azúcar");
    }

    console.log("Aquí tienes el café preparado");
}

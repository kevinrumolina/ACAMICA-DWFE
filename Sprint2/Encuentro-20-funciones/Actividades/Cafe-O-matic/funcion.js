const cafeomatic = (capacidadTasa, cantidadAgua, cantidadCafe, azucar) => {
    console.log("Preparando el cáfe");
    if (capacidadTasa < cantidadAgua) {
        return console.log("Lo siento, es mucha agua");
    }
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

    return console.log("Aquí tienes el café preparado");
}
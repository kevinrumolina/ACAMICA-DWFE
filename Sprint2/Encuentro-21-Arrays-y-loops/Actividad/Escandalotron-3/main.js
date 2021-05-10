const sumatoriaArray = array => {
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }

    return resultado;
}

const escandalotron = array => {
    const totalDecibeles = sumatoriaArray(array);

    if (totalDecibeles <= 30) {
        return "las personas están susurrando";
    } else if (totalDecibeles >= 60 && totalDecibeles <=90) {
        return "el sonido es normal";
    } else if (totalDecibeles > 90) {
        return "las personas están haciendo un ESCÁNDALO";
    } else {
        return "la cantidad de decibeles no pudo ser procesada";
    }
}

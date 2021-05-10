let notas = [5, 10, 10, 9, 5, 5, 2];

const sumatoriaArray = array => {
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }

    return resultado;
}

const promedioArray = array => {
    const total = sumatoriaArray(array);

    return total / array.length;
}

console.log(promedioArray(notas));
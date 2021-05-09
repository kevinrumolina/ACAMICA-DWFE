const escandalotron = (decibelesPersona1, decibelesPersona2, decibelesPersona3) => {
    const totalDecibeles = decibelesPersona1 + decibelesPersona2 + decibelesPersona3;

    if (totalDecibeles <= 30) {
        console.log("las personas están susurrando");
    } else if (totalDecibeles >= 60 && totalDecibeles <=90) {
        console.log("el sonido es normal");
    } else if (totalDecibeles > 90) {
        console.log("las personas están haciendo un ESCÁNDALO");
    } else {
        console.log("la cantidad de decibeles no pudo ser procesada");
    }
}

function calculateAverage(numNotas) {
    let count = 0;
    let sumaNotas = 0;
    if (numNotas > 0) {
        while(count < numNotas) {
            let nota = parseInt(prompt("Ingrese un valor entero para la nota"));
            sumaNotas = sumaNotas + nota;
            count++;
        }
    } else {
        let salir = false;
        while(!salir) {
            let nota = parseInt(prompt("*Ingrese un valor entero para la nota"));
            if (isNaN(nota)){
                salir = true;
            } else {
                sumaNotas = sumaNotas + nota;
                count++;
            }
        }
    }
    console.log(`sumaNotas=${sumaNotas} | count=${count}`);
    return sumaNotas / count;
}


function obtenerNotas(numNotas) {
    let count = 0;
    let notas = [];
    if (numNotas > 0) {
        while(count < numNotas) {
            let nota = parseInt(prompt("Ingrese un valor entero para la nota"));
            notas.push(nota);
            //notas.unshift(nota);
            count++;
        }
    } else {
        let salir = false;
        while(!salir) {
            let nota = parseInt(prompt("*Ingrese un valor entero para la nota"));
            if (isNaN(nota)){
                salir = true;
            } else {
                notas.push(nota);
            }
        }
    }
    console.log(`Notas=${notas}`);
    console.log(notas);
    return notas;
}

function calcularPromedio(notas){
    let sumaNotas = 0;
    for (let index = 0; index < notas.length; index++) {
        const nota = notas[index];
        sumaNotas = sumaNotas + nota;
    }
    return sumaNotas / notas.length;
}
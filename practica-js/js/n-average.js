let count = 0
let numNotas = 10;
let sumaNotas = 0;
while(count < numNotas) {
    let nota = parseInt(prompt("Ingrese un valor entero para la nota"));
    sumaNotas = sumaNotas + nota;
    count++;
}

let promedio = sumaNotas / numNotas;
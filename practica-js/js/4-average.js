let count = 0
let sumaNotas = 0;
while(count < 4) {
    let nota = parseInt(prompt("Ingrese un valor entero para la nota"));
    sumaNotas = sumaNotas + nota;
    count++;
}

let promedio = sumaNotas / count;
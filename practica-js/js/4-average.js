let count = 0
let sumaNotas = 0;
while(count < 4) {
    let nota = parseInt(prompt("Ingrese un valor entero para la nota"));
    console.log(`La nota ingresada es: ${nota}`);
    sumaNotas = sumaNotas + nota;
    count++;
}
console.log(`La suma de las notas es: ${sumaNotas}`);
let promedio = sumaNotas / count;
console.log(`El promedio de notas es: ${promedio}`);
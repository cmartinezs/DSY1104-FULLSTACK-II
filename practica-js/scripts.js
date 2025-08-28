var a = 5.0;
const b = '5';

console.log('Valor de a = ', a);
console.log('Valor de b = ' + b);

console.log(`Suma de a + b = ${a + b}`);
console.log(`Resta de a - b = ${a - b}`);
console.log(`Multiplicación de a * b = ${a * b}`);
console.log(`División de a / b = ${a / b}`);

console.log(`Igualdad de a == b => ${a == b}`);
console.log(`Identidad de a === b => ${a === b}`);

var texto = prompt('Ingrese un texto: ');
console.log('El texto ingresado es: ', texto);


if (texto === 'Hola Mundo') {
    console.log('El texto ingresado es igual a "Hola Mundo"');
} else {
    console.log(`El texto ingresado es diferente => "${texto}"`);
}

var count = 10
while (count > 0) {
    console.log(`Quedan ${count} intentos`);
    count--;    
}

var x = parseInt(prompt('Ingrese un número entero: '));

if (isNaN(x)) {
    document.writeln('<h1>Error: No es un número entero válido</h1>');
} else {
    document.writeln(`<h1>Hola Mundo: ${x}</h1>`);
}
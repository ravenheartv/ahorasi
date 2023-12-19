//01_ejercicio

let nombre = "Idaira";
console.log(nombre);
//02_ejercicio


let valor = 5;
console.log(valor * 2);

//03_ejercicio.js

let usuario = {
    nombre: "Idaira",
    edad: 19,
    ciudad: "Granada"
};

let saludo = `Hola, me llamo ${usuario.nombre}, tengo ${usuario.edad} años y soy de ${usuario.ciudad}.`;
console.log(saludo);


//04_ejercicio.js

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function doble(a) {
    return a * 2;
}

console.log(sumar(2, 3));
console.log(restar(5, 2));
console.log(multiplicar(4, 6));
console.log(dividir(8, 2));
console.log(doble(10));


//05_ejercicio.js


function areaCirculo(radio) {
    let area = 3.1416 * radio * radio;
    console.log(`El área del círculo con radio ${radio} es: ${area}`);
    return area;
}

areaCirculo(5);


//06_ejercicio.js

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);
    return fahrenheit;
}

celsiusToFahrenheit(20);


//07_ejercicio.js

function calcularPrecioConIva(precioSinIva) {
    let precioConIva = precioSinIva * 1.21;
    console.log(`El precio con IVA de ${precioSinIva} es: ${precioConIva}`);
    return precioConIva;
}

calcularPrecioConIva(100);

//08_ejercicio.js

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//09_ejercicio.js

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//10_ejercicio.js

for (let i = -10; i <= 1; i++) {
    console.log(i);
}
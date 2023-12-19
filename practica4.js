//ejercicio 11

function mostrarElementos(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i], typeof array[i]);
    }
}


//Ejercicio 12

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return {
        peso,
        altura,
        imc
    }
}

console.table(calcularIMC(80, 1.80));


//Ejercicio 13

function sumaElementos(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
    }
    return resultado;
}

function sumaNumeros(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'number'){
            resultado += arr[i];
        } else {
            throw new Error('El elemento no es un número');
        }
    }
    return resultado;
}

const arr = [12, 2.5, "hola", true]

console.log(sumaElementos(arr))
console.log(sumaNumeros(arr))


//Ejercicio 14

function menor(array) {
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}


//Ejercicio 15

function esPar(numero) {
    return numero % 2 === 0;
}


//Ejercicio 16

function capitalize(str) {
    let caracteres = str.split('');
    caracteres[0] = caracteres[0].toUpperCase();
    return caracteres.join('');
}

function capitalizeBonito(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.time('capitalize')
console.log(capitalize('lorem ipsum'))
console.timeEnd('capitalize')

console.time('capitalizeBonito')
console.log(capitalizeBonito('lorem ipsum'))
console.timeEnd('capitalizeBonito')



//Ejercicio 17

function atontador(string){
        let new_string = ""

    for(let i = 0; i < string.length; i++){
        if(i%2 === 0){
            new_string += string.charAt(i).toUpperCase()
        } else{
            new_string += string.charAt(i).toLowerCase()
        }
    }
    return new_string
}


function atontador(string) {
  let new_string = ""
  let index = 0
  for (const caracter of string){
    new_string += index % 2 ? string.charAt(index).toUpperCase() : string.charAt(index).toLowerCase()
    index++; 
  }
return new_string
}


//Ejercicio 18

function cambiarVocales(string, vocal) {
    let new_string = ""
    for (const caracter of string){
        if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
            new_string += vocal
        } else {
            new_string += caracter
        }
    }
    return new_string
}


//Ejercicio 19

function contarXO(cadena) {
    let x = 0;
    let o = 0;
    for (const caracter of cadena) {
        if(caracter === 'X') {
            x++;
        } else if(caracter === 'O') {
            o++;
        }
    }
    return {x, o}
}

//Ejercicio 20

function contarLife(cadena) {
    let contador = 0;
    const palabras = cadena.split(' ');
    for(let i = 0; i < palabras.length; i++) {
        if(palabras[i].toLowerCase() === 'life') {
            contador++;
        }
    }
    return contador;
}

//Ejercicio 21

const estudiantes = [
    { nombre: "John", calificacion: 7 },
    { nombre: "Jane", calificacion: 8 },
    { nombre: "Bob", calificacion: 4 },
    { nombre: "Doe", calificacion: 5 },
    { nombre: "Mark", calificacion: 10 }
];

function estudiantesAprobados(estudiantes) {
    const aprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 5);
    return aprobados.map(estudiante => estudiante.nombre);
}

console.log(estudiantesAprobados(estudiantes));

//Ejercicio 22

const frutas = ["manzana", "pera", "uva", "fresa", "sandía"];

function frutasConA(frutas) {
    return frutas.filter(fruta => fruta.includes('a'));
}

console.log(frutasConA(frutas));

//Ejercicio 23

const numeros = [2, 5, 7, 10, 15];

function dobleDeNumeros(numeros) {
    return numeros.map(numero => numero * 2);
}

console.log(dobleDeNumeros(numeros));

//Ejercicio 24

const edades = [25, 18, 30, 15, 22];

function edadMasAlta(edades) {
    return Math.max(...edades);
}

console.log(edadMasAlta(edades));

//Ejercicio 25

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Teléfono", precio: 800 },
    { nombre: "Tablet", precio: 500 },
    { nombre: "Smartwatch", precio: 300 }
];

function sumaTotalPrecios(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

console.log(sumaTotalPrecios(productos))
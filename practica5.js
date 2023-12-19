
//Ejercicio 21
// Juego de adivinar un número
const numeroAleatorio = Math.floor(Math.random() * 101); 
let intentos = 0;

while (true) {
    const guess = prompt("Adivina el número (o escribe 'salir' para terminar):");

    if (guess.toLowerCase() === 'salir') {
        console.log("Te has rendido. El número era: " + numeroAleatorio);
        break;
    }

    const numeroUsuario = parseInt(guess);

    if (!isNaN(numeroUsuario)) {
        intentos++;

        if (numeroUsuario === numeroAleatorio) {
            console.log("Felicidades! Adivinaste en " + intentos + " intentos.");
            break;
        } else {
            console.log("Intentalo de uevo");
        }
    } else {
        console.log("argo  valido porfi");
    }
}


//Ejercicio 22

let lista = ['🧁', '💣', '🍠', '💣', '🍡', '💣', '🥟', '💣', '🥑', '💣', '🍾', '💣', ' 🍎', '💣']
let comida = []

for (let i = 0; i < lista.length; i++) {
    if (lista[i] !== '💣') {
        comida.push(lista[i]);
    }
}

console.log("Lista:", lista);
console.log("Comida:", comida);


//Ejercicio 23

function getRandomList(){
    const lista = ['🧁', '🍠', '🍡', '🥟', '🥑', '🍾', ' 🍎'];
    let output = []
    const len = Math.floor(Math.random()*100 + 20)

    for(let i = 0; i < len; i++){
        const val = Math.random()*80+20
        if(val > 50){
            output.push(getRandomElement(lista))    
        }else{
            output.push("💣")
        }
    }

    function getRandomElement(arr){
      return arr[Math.floor(Math.random() * lista.length)]
    }

    return output
}

let lista = getRandomList()
let comida = []

while (lista.length > 0) {
    const elemento = lista.pop();
    if (elemento !== '💣') {
        comida.push(elemento);
    }
}

console.log("Lista original:", lista);
console.log("Comida:", comida);


//Ejercicio 24

const string = "Dejad de darle la vuelta a mis strings!";

function invertirPalabras(str) {
    const palabras = str.split(' ');
    const palabrasInvertidas = palabras.map(palabra => {
        const caracteres = palabra.split('');
        const caracteresInvertidos = caracteres.reverse();
        return caracteresInvertidos.join('');
    });
    return palabrasInvertidas.join(' ');
}

const resultado = invertirPalabras(string);
console.log(resultado);


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

console.log(sumaTotalPrecios(productos));


//Ejercicio Adicional

const dispositivo = {
    beta: Math.PI,
    gamma: Math.sqrt(Math.PI),
    delta: Math.floor(Math.random() * 101),
    epsilon: Math.pow(Math.PI, dispositivo.delta),
    zeta: '💎'.repeat(265),
    velocidad: Math.random().toFixed(1),
    foco: '',
    ingredientes: ['plomo', 'hierro', 'cobre', 'mercurio', 'estaño', 'agua'],
    operador: dispositivo.beta > dispositivo.delta,
    resultado: ''
};

console.log(dispositivo);
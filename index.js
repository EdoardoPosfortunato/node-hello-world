let frase = "Hello Boolean"

let parolaDaTerminale = process.argv[2];
let arrayDaTerminale = process.argv;

// importo funzioni

import { contaVocali, arrayDiNumeri, numeroMaggiore } from "./function.js"


// stampo nel terminale

const nuemrodiVocali = contaVocali(parolaDaTerminale); // restituisce il numero di vocali
console.log(`Il numero di vocali nella parola ${parolaDaTerminale} è ${nuemrodiVocali}`)

const arrayNumeri = arrayDiNumeri(arrayDaTerminale) // trasforma l'array di stringhe in array di numeri
console.log(arrayNumeri)

const numeropiuAlto = numeroMaggiore(arrayNumeri) // restituisce il numeor più alto di un array di numeri
console.log(numeropiuAlto)


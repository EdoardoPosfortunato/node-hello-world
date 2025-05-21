// Funzione contavocali

function contaVocali(parola) {

    const vocali = ["a", "e", "i", "o", "u"];

    let contatore = 0;

    for(let i = 0; i < parola.length; i++) {
        if (vocali.includes(parola[i])) {
            contatore++;
        }
    }
    
    return contatore;
}

// Funzione trasforma array di stringhe in numeri

function arrayDiNumeri(arrayDaTerminale) {

    const arrayDaControllare = arrayDaTerminale.slice(2);

    let arrayNumeri = arrayDaControllare.map(currNum => parseInt(currNum));

    return arrayNumeri }
    

// Funzione trova il numero più alto in un array

function numeroMaggiore(arrayDiNumeri) {

    let numeroAlto = arrayDiNumeri[0];

    arrayDiNumeri.forEach(element => {
        if(element > numeroAlto) {
            numeroAlto = element;
        }
    });

    return numeroAlto
};

export { contaVocali, arrayDiNumeri, numeroMaggiore}
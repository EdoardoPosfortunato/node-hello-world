// Funzione contavocali

function contaVocali(parola) {

    const vocali = ["a", "e", "i", "o", "u"];

    let contatore = 0;

    for(let i = 0; i < parola.length; i++) {
        if (vocali.includes(parola[i])) {
            contatore++;
        }
    }
    
    console.log(contatore)
}

export {contaVocali}
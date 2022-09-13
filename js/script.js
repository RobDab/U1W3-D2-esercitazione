let name = prompt(`inserisci qui il tuo nome`,`Mario Rossi`)
console.log('ciao ' + name)

console.log('calcolatore di valore assoluto') 
let number = Number(prompt('Ciao ' + name + '. Inserisci il numero di cui calcolare il |VA|...'))

console.log('|' + number + '| = ' + valoreAssoluto(number))

document.getElementById('risultato').innerHTML = valoreAssoluto(number)


console.log('eseguito')


const piGreco = 3.14159
console.log('la circonferenza di un cerchio di D=1 è ' + piGreco)





let heisenberg = (1 == 0)
console.log(heisenberg)
console.log("L'assegnazione della variabile ha restituito " + heisenberg)





const rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto = 42

console.log ('Risposta...etc è: ' + rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto)

let doppio = rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto * 2

console.log('variabile doppio è: ' + doppio)


// RispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto = 'ciao'

// RIAASEGNAZIONE DI UNA VARIABILE COST
rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto += 42
console.log('ora Risposta..etc è: ' + rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto)




















// FUNZIONI
function valoreAssoluto(x){
    if(x>0 || x===0){
        return(x)
    }
    else{
        return(-x)
    }
}

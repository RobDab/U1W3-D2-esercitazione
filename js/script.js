
let name = prompt(`inserisci qui il tuo nome`,`Mario Rossi`)
console.log('ciao ' + name)

function valAssoluto(){


console.log('calcolatore di valore assoluto') 
let number = Number(prompt('Ciao ' + name + '. Inserisci il numero di cui calcolare il |VA|...'))

console.log('|' + number + '| = ' + valoreAssoluto(number))

document.getElementById('risultato').innerHTML = 
'<p>Risultato: ' + valoreAssoluto(number) + '</p>'


console.log('eseguito')

function valoreAssoluto(x){
    if(x>0 || x===0){
        return(x)
    }
    else{
        return(-x)
    }
}
}
const piGreco = 3.14159

function circleArea(){
    
    console.log('calcolatore area del cerchio') 
    let r = Number(prompt('Ciao ' + name + '. Inserisci il raggio di un cerchio..'))

    
    

    document.getElementById('risultato_area_cerchio').innerHTML = 
    '<p>Risultato: ' + areaCerchio(r) + '</p>'

}

function areaCerchio(r){
    let area = piGreco * r * r
    return area
}


function volumeCylinder(){
    console.log('calcolatore volume del Cilindro') 
    let r = Number(prompt('Inserisci il raggio del cerchio di base..'))
    let h = Number(prompt('Inserisci l\'altezza del cilindro..'))

    
    

    document.getElementById('risultato_volume_cilindro').innerHTML = 
    '<p>Risultato: ' + volumeCilindro(r,h) + '</p>'
}

function volumeCilindro(r , h){
    let vol = areaCerchio(r) * h

    return vol
}


// console.log('la circonferenza di un cerchio di D=1 è ' + piGreco)





// let heisenberg = (1 == 0)
// console.log(heisenberg)
// console.log("L'assegnazione della variabile ha restituito " + heisenberg)





// const rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto = 42

// console.log ('Risposta...etc è: ' + rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto)

// let doppio = rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto * 2

// console.log('variabile doppio è: ' + doppio)


// // RispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto = 'ciao'

// // RIAASEGNAZIONE DI UNA VARIABILE COST
// rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto += 42
// console.log('ora Risposta..etc è: ' + rispostaAllaDomandaFondamentaleSullaVitaLUuniversoEeTuttoQuanto)























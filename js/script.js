// ESEMPIO BASE

// let x = 3;

// if (x == 3) {
//     alert( `ciao utente` );    
// } else {
    
// }

// let x = 20;

// if ( x > 15 && x !== 100) {
//     console.log(`sto eseguendo l'if`);
// } else if ( x > 3 || x === 0) {
//     console.log(`sto eseguendo la else if`);
// } else if ( !(x === 1) ) {
//     console.log(`sto eseguendo la else`);
// }



// ESEMPIO 1

// Chiediamo all'utente 2 parole in successione
// Andiamo poi a verificare quale è più lunga 
// Stampiamo in console un messaggio appropriato

// let parola = "ciao";
// console.log(parola.length);

// Procedimento - 

// Chiedo le parole all'utente
// const firstWord = prompt(`Dimmi la prima parola:`);
// const secondWord = prompt(`Dimmi la seconda parola:`);

// Comparo le stringhe e preparo un messaggio per l'utente
// let message; 

// if(firstWord.length > secondWord.length){
//     message = `La prima parola è più lunga`;
// } else if(firstWord.length < secondWord.length){
//     message = `La seconda parola è più lunga`;
// } else{
//     message = `Le parole hanno uguali lunghezza;`
// }

// Stampo il messaggio
// console.log(message);



// ESEMPIO 2

// Età: chiedere all'utente con 2 prompt gli anni di 2 persone
// Comunicare quale delle 2 è più grande

// Chiediamo le due età
// const userFirstAge = parseInt(prompt(`Per favore dimmi la prima età:`));
// const userSecondAge = parseInt(prompt(`Per favore dimmi la seconda età:`));

// let finalMessage = `Le due persone hanno la stessa età`;

// If per comparare le età
// if(userFirstAge > userSecondAge){
//     finalMessage = `La prima persona è più grande`;
// } else if(userFirstAge < userSecondAge){
//     finalMessage = `La seconda persona è più grande`;
// }

// output
// alert(finalMessage);



// ESEMPIO 3

// Pari o dispari:
// Chiedere all'utente se vuole pari o dispari e un numero compreso tra 0 e 9
// Generare un numero casuale compreso tra 0 e 9, che sarà la giocata del computer
// Sommare i due numeri
// Comunicare chi ha vinto


// RACCOLTA DATI UTENTE E PREPARAZIONE VARIABILI
// Chiedere all'utente se vuole pari o dispari
const userChoice = prompt(`Scegli pari o dispari:`);
console.log(userChoice);
// Chiedere all'utente un numero casuale tra 1 e 9
const userNumber = parseInt(prompt(`Dimmi un numero tra 1 e 9:`));
console.log(userNumber);
// Generiamo un numero tra 1 e 9 per il computer
let computerNumer = Math.floor(Math.random() * 9) + 1;
console.log(computerNumer);

// LOGICA
// Sommo il numero dell'utente a quello del computer per capire se la somma è pari o dispari
let numbersSum = userNumber + computerNumer;
console.log(numbersSum);
// Andare a comparare la scelta dell'utente con l'essere pari o dispari della somma
if(numbersSum % 2 === 0 && userChoice === `pari` || (numbersSum % 2 !== 0 && userChoice === `dispari`)){
    alert(`Hai vinto`);
} else {
    alert(`Hai perso`);
}

// OUTPUT

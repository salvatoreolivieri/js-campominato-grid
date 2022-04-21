/* 
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

Con difficoltà 1 => tra 1 e 100
Con difficoltà 2 => tra 1 e 81
Con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/* Step
  1. Inseriamo una costante che al click del bottone "conferma" fa partire la nostra WebApp 
  2. Funzione per generare i quadrati
  3. Funzione che crea dei random number all'interno dei quadrati
  4. Funzione che al click colora il quadrato di azzurro
*/


// 1. Inseriamo una costante che al click del bottone "conferma" fa partire la nostra WebApp

const container = document.querySelector(".container");

const btnConfirm = document.getElementById("conferma");
btnConfirm.addEventListener("click", init);


function init() {
  for(let x = 1; x <= 100; x++){
    const square = squareGenerator();
  }
}


// 2. Funzione per generare i quadrati

function squareGenerator() {
  const square = document.createElement("div");
  square.classList.add("square-100");
  container.append(square);

  return square;
}
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

const btnConfirm = document.getElementById("conferma");
btnConfirm.addEventListener("click", init);

function init() {

  const container = document.querySelector(".container");
  container.innerHTML = "";

  for(let x = 1; x <= 100; x++){

    const square = squareGenerator(container);

    square.addEventListener("click", function() {
      this.classList.add("clicked");
    })
  } 


}


// 2. Funzione per generare i quadrati

function squareGenerator(target) {
  const square = document.createElement("div");
  square.classList.add("square-100");

  const number = uniqueRandomNumberGenerator(100,1);
  square.innerHTML = number;

  target.append(square);
  return square;
}


// 3. Random number

function uniqueRandomNumberGenerator(max, min) {

  let number = Math.floor(Math.random() * (max - min + 1) ) + min;

  // function createArrayNymbers(params) {
  //   let listNumber = [];
    
  //   for (let x=1; 1<=100; x++){
  //     listNumber.push(i);
  //   }

    // return listNumber;
  // }

  return number;

}

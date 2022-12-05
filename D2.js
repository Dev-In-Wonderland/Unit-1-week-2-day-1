/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let numero = 16 /* Il conttenuto di un dato numerico in una variabile viene indicato con un valore numerico sia intero che decimale dopo il simbolo senza essere contrassegnato da virgolette. */
let stringa = "anatra" /* Il contenuto di un dato stringa in una variaile viene indicato con una sequenza di caratteri, sia di lettere che di numeri, racchiusi fra virgolette e viene assegnato alla variabile con il simbolo uguale. */
let booleano = true /*Il contenuto di un dato booleano in una variabile può avere come valore o true o false e assegna alla variabile una dichiarazione: se sia vera oppure falsa.*/
let y = null /* Quando una variabile non ha nessun valore al suo interno */  
 
const qualcosa = qualcosaltro /* Quando una variabile non è definita, cioè non è assegnata ad un determinato valore*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* let nome = "Tommaso" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/*let numero1 = 12
let numero2 = 20
let risultato = numero1 + numero2 
console.log (risultato)  */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.

nome = "Nannicini"
console.log (nome)

const secondonome = "Mario"
secondonome= "Gustavo"
console.log (secondonome)

Il valore della variabile secondonome che appare nella console è sempre Mario perché il valore di una costante non può essere sovrascritto */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* 
let numero3 = 4
let sottrazione = (numero3 - x) 
console.log (sottrazione) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 
let name1 = "john"
let name2 = "John"
console.log (name1 === name2)

console.log (name1 !== name2)

console.log (name1.toLoweCase() === name2.toLowerCase())

let john = name2.toLowerCase()
console.log (john === name1) 
*/









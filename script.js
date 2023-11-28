
const kilometri_1 = 0.21 ;
console.log(kilometri_1);

//chiede al utente il numero di chilometri che vuole percorrere
const user_kilometri = prompt('Quanti Kilometri vuoi percorrere?')
console.log(user_kilometri)


//chiede al utente la sua etá
const user_eta = prompt('Quanti anni hai?')
console.log(user_eta)


//Variabili risultati e sconti
const result =  user_kilometri * kilometri_1 ; //risultato biglietto genérico
const sconto_65 = 40 / result * 100 ; // calcolo sconto over 65
const sconto_minori = 20 / result * 100 ; // calcolo sconto minoreni
const result_2 =  user_kilometri * kilometri_1 - sconto_65 ; //risultato over 65
const result_3 =  user_kilometri * kilometri_1 - sconto_minori; //risultato minoreni


    if ((user_eta >= 18) && (user_eta < 65)) {
    console.log (result); 
    
    // Stampa in pagina L'output del prezzo finale
    let prezzoElement = document.getElementById ('prezzo')
    prezzo.innerHTML = 'Prezzo del Biglietto:', result;

    let prezzo_numeroElement = document.getElementById ('prezzo_numero')
    prezzo_numeroElement.innerHTML = result;

        } else if (user_eta >= 65) {
            console.log (result_2);

            // Stampa in pagina L'output del prezzo finale
            let prezzoElement = document.getElementById ('prezzo')
            prezzo.innerHTML = 'Prezzo del Biglietto:', result_2;
        
            let prezzo_numeroElement = document.getElementById ('prezzo_numero')
            prezzo_numeroElement.innerHTML = result_2;
        
        } else if (user_eta < 18) {
            console.log (result_3);

            // Stampa in pagina L'output del prezzo finale
            let prezzoElement = document.getElementById ('prezzo')
            prezzo.innerHTML = 'Prezzo del Biglietto:', result_3;
        
            let prezzo_numeroElement = document.getElementById ('prezzo_numero')
            prezzo_numeroElement.innerHTML = result_3;
        }

            
/*
Descrizione:
Il programma dovrà chiedere all'utente:
  il numero di chilometri che vuole percorrere
  e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
  il prezzo del biglietto è definito in base ai km (0.21 € al km)
  va applicato uno sconto del 20% per i minorenni
  va applicato uno sconto del 40% per gli over 65 (fortunelli).

L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/

/*
tools:
prompt
const, let

*/







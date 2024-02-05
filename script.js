
const yesButton = document.getElementById('yes');
let contentDiv = document.getElementById('content');    
let noButton = document.getElementById('no');

let initialNoButtonValue = false;

//Funzione per la gestione del Sí 
yesButton.addEventListener('click', function () {
    changeDivInnerHTML();
});

//Funzione per la gestione del No
noButton.addEventListener('click', function () {
    if (initialNoButtonValue === false) { 
        noButton.innerHTML = 'Sí';
        initialNoButtonValue = true;
    } else {
        changeDivInnerHTML();
    }
});

function changeDivInnerHTML () {
    contentDiv.innerHTML = '<p>Lo sapevo, ti amo ❤️</p>';
}
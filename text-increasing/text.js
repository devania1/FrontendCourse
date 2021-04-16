//1. pobieramy wszystkie potrzebne elementy z DOM

const btnBigger = document.querySelector('.bigger');
const btnSmaller = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b. - określamy potrzebne dane

let textSize = 16; //początkowa wartośc fontsize


//3.Określenie akcji

function makeTextBigger() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function makeTextSmaller() {
    textSize--;
    text.style.fontSize = `${textSize}px`;
}

//2.Ustawwienie nasłuchiwania - powinno być na końcu

btnBigger.addEventListener('click', makeTextBigger);
btnSmaller.addEventListener('click', makeTextSmaller);


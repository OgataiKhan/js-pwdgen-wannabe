'use strict';

const elementName = document.getElementById('name');
const elementSurname = document.getElementById('surname');
const elementColor = document.getElementById('color');
const elementNumber = document.getElementById('number');

elementName.innerHTML = prompt('Qual è il tuo nome?');
elementSurname.innerHTML = prompt('Qual è il tuo cognome?');
elementColor.innerHTML = prompt('Qual è il tuo colore preferito?');
elementNumber.innerHTML = Math.floor(Math.random() * (99 - 10 + 1)) + 10; // Genero un numero intero casuale compreso tra 10 e 99. In caso volessi cambiare il range è sufficiente cambiare questi due numeri nella formula.

console.log(elementName.innerHTML);
console.log(elementSurname.innerHTML);
console.log(elementColor.innerHTML);
console.log(elementNumber.innerHTML);

//End of the exercise

// One extra bonus because I wanted to learn more: use a function with a loop to randomize the background color

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.body.style.backgroundColor = getRandomColor();
console.log('%cDOM uždaviniai', 'background-color: blue; color: white; font-size: 12px; padding: 5px 10px');

console.log('%cPirmas uždavinys:', 'background-color: red; color: white; font-size: 12px; padding: 5px 10px');
// A Dalis:
const h1 = document.querySelector('h1');

h1.style.color = 'darkgreen';
// B Dalis:
const i = document.querySelector('i');

i.classList.add('small')
console.log(i);
// C Dalis:
h1.classList.remove('main');
console.log(h1);
// D Dalis:
const h2 = document.querySelector('h2');

h2.classList.add('first');
h2.classList.remove('main');
console.log(h2);
// E Dalis:
const span = document.querySelector('span');
span.style.color = 'grey';
span.style.fontSize = '10px';
console.log(span);

// Antras uždavinys:
console.log('%cAntras uždavinys:', 'background-color: red; color: white; font-size: 12px; padding: 5px 10px');
// A Dalis:

let h21 = document.querySelectorAll('h2');
let count = h21.length;

console.log(count++);

// B Dalis:

let kiekis = 0;

h21.forEach(h21 => {
    if (h2 != h2.first) {
        kiekis++
        // C Dalis:
        h21.style.color = 'skyblue';
    }
});

console.log(kiekis);
console.log(h21);
// D Dalis:

let divClasses = document.querySelectorAll('div.prices h2');

divClasses.forEach(h2 => {
    h2.classList.add('price-tag');
})

console.log(divClasses);

// E Dalis:

let allNew = document.querySelectorAll('.new');

allNew.forEach(allNew => {

    allNew.style.textDecoration = 'underline';

});

console.log(allNew);
// F Dalis:
let allUl = document.querySelectorAll('ul');

let kiekis1 = 0;

allUl.forEach(allUl => kiekis1++);

console.log('Givunu kategoriju yra:', kiekis1);

// G Dalis:

console.log(allUl);

allUl.forEach(allUl => {
    console.log(allUl.id);
    allUl.style.border = '1px solid black';
    allUl.style.padding = ' 15px 50px 15px 50px';

});

// console.log(allUl.id);
// H Dalis:

let sum = 0;
allNew.forEach(allNew => sum++);

console.log('Nauju gyvunu yra:', sum);

// I Dalis:
let li = document.querySelectorAll('li');
let sum1 = 0;
li.forEach(li => {
    if (allUl.li === li.new) {
        sum1++
    }

});
console.log(li)
console.log(sum1);

console.log('%cTrecias uždavinys:', 'background-color: red; color: white; font-size: 12px; padding: 5px 10px');
// A Dalis:
// const h1 = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', _ => {
    h1.style.color = 'orange';
})
// B Dalis:

i.addEventListener('click', _ => {
    i.style.fontWeight = 'bold';
});
console.log(i)
// C Dalis:
let bigPrices = document.querySelector('.prices');

bigPrices.addEventListener('click', _ => {

    bigPrices.style.backgroundColor = 'grey';

});
// let bigPrices1 = document.querySelector('.prices');

// bigPrices1.addEventListener('click', _ => {

//     bigPrices1.style.backgroundColor = 'white';
// });

// console.log(bigPrices1)



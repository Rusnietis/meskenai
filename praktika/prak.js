console.log('Sveika praktika');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Uždavinys: Suskaičiuokite, kiek kartų skaičius 3 pasikartoja nuo 0 iki 100.
// function countThrees() {
//     let count = 0;
//     for (let i = 0; i <= 100; i++) {
//       if (i % 3 === 0) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(`Skaičius 3 pasikartojo ${countThrees()} kartus.`);


//   function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   console.log(factorial(5));

// function convertMinutesToHoursAndMinutes(minutes) {
//     let hours = Math.floor(minutes / 60);
//     let remainingMinutes = minutes % 60;
//     return hours + " val. " + remainingMinutes + " min.";
// }

// console.log(convertMinutesToHoursAndMinutes(300))


// 8 uzdavinys

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(6)); 
  console.log(isPrime(15));


//   spread

const regular = ['VW', 'Skoda', 'Audi'];
const electic = ['Tesla', 'BMW I3', 'Jaguar I - Pace'];

const cars = [...regular, ...electic];

const carsNew = [...cars]
carsNew[0] = 'Motorcycle'

console.log(cars)
console.log(carsNew)

const word = 'electric';
const leters = [...word];

console.log(leters)

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x**2);
console.log(squares)

// Objektinis programavimas
//Objekto sukurimas
//shortcuts

const arr = []; //masyvas
const obj = {}; //objektas

// longcuts

const arr2 = new Array(); // naujas objektas (masyvas)
const obj2 = new Object(); // naujas objektas (objektas)
const map = new Map(); // naujas objektas

// construktor

class Racoon {
  constructor(racoonName, color = 'grey') {

    console.log('New rocoon is born');
    this.food = 5;
    this.name = racoonName;
    this.color = color;
  }
    // eat method

    eat() {
      console.log(this.color + ' ' + this.name + ' is eating');
      this.food--;
      console.log('I have ' + this.food + ' food left')
    }

  

}
const racoon1 = new Racoon('Boby', 'brown');
const racoon2 = new Racoon('Roby');

racoon1.eat();
racoon1.eat();
racoon2.eat();
racoon1.eat();


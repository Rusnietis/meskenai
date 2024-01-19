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

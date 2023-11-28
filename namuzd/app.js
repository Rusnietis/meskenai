console.log('Welcome to Rusne');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // // let kint1 = rand(5,25);
// // // let kint2 = rand(5,25);
// // // let kint3 = rand(5,25);

// // // console.log(kint1, kint2, kint3);

// // // let kint4 = kint1 + kint2 + kint3;
// // //    console.log( kint4 );

// // let kint = rand(5,10);
 
// // console.log(kint);


// // for ( let i = 0; i < 5; i++ ) {
// //     console.log('labas', i);
// // }

// // for (let kint = 5;kint < 10; kint++ ) {
// //     console.log('kintamas', kint);
// // } 

// // let i = 0;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 5);

// // for (let i = 0; i < 5; i++) {
// //     if (i === 3) {
// //       break;
// //     }
// //     console.log(i);
// // }

// // let vaisius = "Obuolys";
// // switch (vaisius) {
// //   case "Bananas":
// //     console.log("Bananas");
// //     break;
// //   case "Obuolys":
// //     console.log("Obuolys");
// //     break;
// //   default:
// //     console.log("Neatpažintas vaisius");
// // }

// let kint1;

// for (let i = 0; i < 5; i++ ) {
//   let kint1 = rand(10,25);
// } 
// console.log(kint1);


function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "number has to be positive.";
  }
}
let n = 6;
answer = factorial(n);
console.log("Factorial of " + n + " : " + answer);
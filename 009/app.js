function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Pirmas uždavinys

// let digit1 = rand(0,4);
// let digit2 = rand(0,4);

// console.log(digit1,digit2);
// if (digit1>digit2) {
//   console.log (digit1/digit2);
// } else if (digit2>digit1) {
//   console.log(digit2/digit1);
// } else {
//  console.log('ar digit1 ir digit2 yra lygios');
// }


let digit1 = rand(0,25);
let digit2 = rand(0,25);
let digit3 = rand(0,25);

console.log(digit1,digit2,digit3);
if (digit1>digit2)

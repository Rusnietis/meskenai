function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log('pirmas uzdavinys');

// let a = rand (1,6);
// let b = rand (1,6);
 
// console.log (a, b);

// if ((a+b)>8) {
//     console.log('jus laimejote');
// } else if((a+b)<8) {
//     console.log('jus pralaimejote');
// }
// let Pilkis = Math.floor(Math.random() * 4) + 3;
// let Murklys = Math.floor(Math.random() * 4) + 3;
// console.log(`Pilkis sveria ${Pilkis} kg, o Murklys sveria ${Murklys} kg.`);
// if (Pilkis < Murklys) {
//     console.log(`Lengvesnis katinukas yra Pilkis.`);
// } else if (Murklys < Pilkis) {
//     console.log(`Lengvesnis katinukas yra Murklys.`);
// } else {
//     console.log(`Katinukų svoriai vienodi.`);
// }


// let valkar = rand(0,30);
// let valkat = rand(0,30);

// console.log(valkar, valkat);

// if(valkar<=15&&valkat<=15) {
//     console.log('I valtis telpa ir karves ir katinai');
// }
//  else if(valkar>15&&valkat>15) {
//     console.log('I valtis netelpa');
// } 
//  else if(valkar<15&&valkat>15) {
//     console.log('I valtis netelpa');
// }



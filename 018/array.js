console.log('Welcome to Rusne');

// Suskaiciuoti suma

const arr1 = [
    [1, 7, 3],
    [4, 22, 6],
    [0, 8]
];

let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        sum += arr1[i][j];
    }
}
console.log(sum);


// sukaiciuoti suma

const arr2 = [
    [
        0, [4, 22, 6]
    ],
    2,
    3,
    [
        4,
        [
            4,
            22,
            [0, [0, [0, [[[[0, 8], 8], 8], 8]]]]
        ],
        6
    ],
    5,
    6,
    [0, 8],
    8,
    9
];

const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 0) {
        arr3[i] = 0;
    }
}

console.log(arr3);

// pink to black

const colors2 = [
    {color: 'pink'},
    {color: 'green'},
    {color: 'blue'},
    {color: 'yellow'},
    {color: 'pink'},
    {color: 'black'},
    {color: 'pink'}
];

// pink to black
const colors3 = [
    {color: 'pink', id: 1, sky: 'blue'},
    {color: 'green', id: 2, sky: 'blue'},
    {color: 'blue', id: 3, tractor: 'green'},
    {color: 'yellow', id: 4, sky: 'blue'},
    {color: 'pink', id: 5, forest: 'green'},
    {color: 'black', id: 6, sky: 'blue'},
    {color: 'pink', id: 7, sky: 'blue'}
];

const noPinkIsBlack2 = colors3.map(item => item.color == 'pink' ? {color: 'black'} : item);

console.log(noPinkIsBlack2):
//  visus color pakeisti i juoda

// Antra elementa padaryti juoda


const colors4 = [
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black'],
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black'],
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black'],
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black'],
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black'],
    ['pink', 'green', 'blue'],
    ['yellow', 'pink', 'black']
];
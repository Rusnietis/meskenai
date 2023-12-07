
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log{'bitgirls'}

bitGirls.unshift('Nausėda');

let bitCats = cats.map(cat => [cat, Math.random() < 0.5 ? 'storas' : 'normalus']);

let storuKatinukuSkaicius = bitCats.filter(cat => cat[1] === 'storas').length;
let normaliuKatinukuSkaicius = bitCats.filter(cat => cat[1] === 'normalus').length;
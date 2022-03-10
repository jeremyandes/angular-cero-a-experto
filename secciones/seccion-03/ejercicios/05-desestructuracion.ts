interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 25,
    song: 'Crossfire',
    details: {
        author: 'SRV',
        year: 1989
    }
}

const { volume, second, song, details } = player;
const { author, year } = details;

// console.log('Actual volume is: ', volume)
// console.log('Actual second is: ', second)
// console.log('Song is: ', song)
// console.log('Author is: ', author)
// console.log('Year is: ', year)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ pos1, pos2, pos3 ] = dbz;
const [ pos1, pos2, pos3 ] = dbz;

console.log('Personaje 1:', pos1)
console.log('Personaje 2:', pos2)
console.log('Personaje 3:', pos3)
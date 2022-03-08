// let habilidades: (boolean | string | number)[] = []

// habilidades.push(true)
// habilidades.push('Jeremy')
// habilidades.push(25)
// // habilidades.push(['Andes'])

// console.log(habilidades)


interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    ciudadNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Superman',
    hp: 100,
    habilidades: ['Volar', 'Rayos X', 'Fuerza']
}

personaje.ciudadNatal = 'Asdasd';

console.table(personaje);
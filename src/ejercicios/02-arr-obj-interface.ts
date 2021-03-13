/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Bash', 'counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Stride',
    hp: 100,
    habilidades: ['Bash', 'counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
//DESESTRUTURACION DE OBJETOS
interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}
interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

const autor = 'Fulano'
//PRIMERA  FORMA DE DESESTRUCTURACION DE  UN OBJETO ANIDADO
const {volumen, segundo, cancion , detalles: {autor: autorDetalle}  } = reproductor;
//ESTA SEGUNDA FORMA ES MAS FACIL DE ENTENDER
//const { autor } = detalles;


console.log('El volumen actual es : ', volumen);
console.log('El segundo actual es : ', segundo);
console.log('La cancion actual es : ', cancion);
console.log('El autor es : ', autorDetalle);


//DESESTRUCTURACION DE ARRAY

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;
console.log('Personaje 1 ', p3);
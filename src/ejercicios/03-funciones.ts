function sumar(a: number, b: number):number {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}
console.log(sumar(5,10));

//Si queremos parametros no obligatorios se pone en el siguiente orden:
// obligatorios | no obbligatorios | por defecto
const multiplicar = (num1:number, num2?: number, base:number = 2):number => {
    return num1 * base;
}
const resultado =  multiplicar(5,10);
console.log(resultado);

//FUNCIONES CON OBJETOS
interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void,
}

const curar = (personaje: PersonajeLOR, curarX: number): void => {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
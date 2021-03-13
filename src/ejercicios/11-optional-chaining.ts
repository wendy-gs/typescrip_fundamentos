interface Pasajero {
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos (pasajero: Pasajero):void{
    //al poner ? le decimos que si existe la propidad que tiene hijos que hag un length de lo contrario da undefined 
    // y al ponerel operador o || gana el cero sobre undefained
    const cuantosHijos = pasajero.hijos?.length || 0 
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
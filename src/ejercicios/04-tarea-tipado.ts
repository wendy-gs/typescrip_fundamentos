//TAREA DE FUNCIONES E INTERFACES
interface SuperHeroe {
    nombre:string,
    edad: number,
    direccion: Direccion/*{
        calle: string,
        pais: string,
        ciudad: string
    },*/

    mostrarDireccion: () => string,
}

//ES MEJOR TENER OTRA INTERFACE AL ANIDADAR OBJETOS
interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ' ' + this.direccion.ciudad + ' ' + this.direccion.pais;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
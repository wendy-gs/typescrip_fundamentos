import { Producto, calculaISV } from './06-desestruturacion-parametros';

//Al importar se ejecutara todo el archivo  de donde traera lo importado hasta los console log

const carritoCompra: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio:150
    }
];

const [ total,  isv ] = calculaISV(carritoCompra);
console.log(total);
console.log(isv);
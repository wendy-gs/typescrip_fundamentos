//La letra T significa generico podria ser cualquier letra pero por buenas practicas se pone T
function queTipoSoy<T>(argumento: T){
    return argumento;
}
let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);

let soyEplicito = queTipoSoy<number>(100);
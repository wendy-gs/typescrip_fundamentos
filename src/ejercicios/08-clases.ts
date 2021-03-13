class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    )
    {}
}
class Heroe  extends PersonaNormal{
 //   private: solo es visible en esta clase
 //   public: visible fuera de esta clase
 //   static: voy a poder acceder al valor de esta propiedad sin crear una instancia de esta clase

 //UNA FORMA DE AHORRAR CODIGO ES PONER LOS ATRIBUTOS DENTRO DEL CONSTRUCTOR
   /* alterEgo: string;
    edad: number; 
    nombreReal: number; 
    */
   constructor(
       public alterEgo: string,
       public edad: number,
       public nombreReal: string
       )
       {
           super(nombreReal, 'New York')
       }
}
const iroman = new Heroe('Iroman', 45, 'Tony');
console.log(iroman);

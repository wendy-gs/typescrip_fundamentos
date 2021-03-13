function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
//Los decoradores son funciones
//Para que no marque error en el decorador descomentamos en tsconfig.json  experimetaldecortor
//Los decoradores trabajan antes de crear una instancia 
@classDecorator
  class MiSuperClase {
      public miPropiedad: string = 'abc123';
      imprimir(){
          console.log('Hola mundo');
      }
  }

  //Llamamos a la clase NO la instanciamos
  //Aqui se pintara los de la clase decorador ya que se crea antes de instarciarse una clase
  console.log(MiSuperClase)

  //Instanciamos la clase
  const miClase = new MiSuperClase();
  console.log(miClase)
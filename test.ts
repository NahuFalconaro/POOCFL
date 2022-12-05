class Persona{
  private nombre:string;
  private edad:number;

  constructor(name:string, edad:number){
    this.nombre = name;
    this.edad = edad;
  }
}

let yo = new Persona('Nahuel', 23);

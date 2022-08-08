class Facultad{


    private criterio:Criterio;
    private personas:Persona[];


    constructor(){

    }

    public addPersona(persona:Persona){
        if(this.criterio.cumple(persona)){//persona > 18
            this.personas.push(persona);
        }
        else{
            console.log('no cumple con criterio');
            
        }
    }

}

/*
    if(criterioEdad(persona)){
        hago algo
    }



*/


class Club{

    private participantes: Participante[];

    constructor(){
        this.participantes = [];
    }


    // public getParticipantesId(id:number): Participante{

    //     if(id === null){
    //         throw new Error("id null");
    //     }
    //     try{
    //         this.participantes.forEach( p =>{
    //             if(p.getId() === id){
    //                 if(p.getNombre().length < 4){
    //                     return p;
    //                 }
    //                 else{
    //                     throw new Error("no cumple la condicion del nombre");
                        
    //                 }
    //             }
    //         })
    //     }
    //     catch(error){
    //         console.log('Ocurrio un error');
            
    //     }
    // }

    public addParticipante(p:Participante){
            if(p.getNombre().length > 5)
                this.participantes.push(p)
    }
}
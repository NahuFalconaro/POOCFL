class Pizza{

    private ingredientesExtra:String[];
    private salsa:boolean;
    private borde:boolean;

    public setSalsa(bool:boolean){
        this.salsa = bool;
    }

    public setBorde(bool:boolean){
        this.borde = bool;
    }

    public setIngredientesExtra(ingredientes:String[]){
        this.ingredientesExtra = ingredientes;
    }
}
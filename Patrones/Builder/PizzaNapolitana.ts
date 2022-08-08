class PizzaNapolitana extends PizzaBuilder{

    public buildSalsa() {
        this.pizza.setSalsa(true);
    }  
    public buildBorde() {
        this.pizza.setBorde(false);
    }
    public buildIngredientes() {
        this.pizza.setIngredientesExtra(['tomate', 'morron']);
    }
    
}
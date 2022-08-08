class PizzaFugazzeta extends PizzaBuilder{

    public buildSalsa() {
        this.pizza.setSalsa(false);
    }  
    public buildBorde() {
        this.pizza.setBorde(true);
    }
    public buildIngredientes() {
        this.pizza.setIngredientesExtra(['cebolla', 'muzza']);
    }
    
}
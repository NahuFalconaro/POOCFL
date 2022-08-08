class Cocina{

    
    private pizzaBuilder: PizzaBuilder;

    public setPizzaBuilder(pb: PizzaBuilder):void{
        this.pizzaBuilder = pb;
    }

    public getPizza():Pizza{
        return this.pizzaBuilder.getPizza();
    }

    public hacerPizza():void{
        this.pizzaBuilder.createPizza();
        this.pizzaBuilder.buildBorde();
        this.pizzaBuilder.buildSalsa();
        this.pizzaBuilder.buildIngredientes();
    }

}
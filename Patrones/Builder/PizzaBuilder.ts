abstract class PizzaBuilder{

    protected pizza: Pizza;

    public getPizza():Pizza{
        return this.pizza;
    }

    public createPizza():void{
        this.pizza = new Pizza();
    }

    public abstract buildSalsa();
    public abstract buildBorde();
    public abstract buildIngredientes();


}
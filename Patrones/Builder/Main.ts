

let pizzaNapolitana:PizzaBuilder = new PizzaNapolitana();
let pizzaFug:PizzaBuilder = new PizzaFugazzeta()

let cocina = new Cocina();
cocina.setPizzaBuilder(pizzaNapolitana);
cocina.hacerPizza();

pizzaFug.getPizza().setBorde(true);

cocina.setPizzaBuilder(pizzaFug);
cocina.hacerPizza();
class Pizza {
    constructor(id,nombre,ingredientes,precio) {
        this.id = id,
        this.nombre = nombre,
        this.ingredientes = ingredientes,
        this.precio = precio;
    }
}

let pizza1 = new Pizza(1, "Clasica", ["Muzzarela", "Tomate", "Oregano"], 900);
let pizza2 = new Pizza(2, "CuatroQuesos", ["Muzzarela", "Roquefort", "Parmesano", "Fontina", "Tomate"], 1000);
let pizza3 = new Pizza(3, "Fugazzeta", ["Muzzarela", "Tomate", "Cebolla"], 1200);
let pizza4 = new Pizza(4, "Con Jamon", ["Muzzarela", "Tomate", "Jamon"], 500);
let pizza5 = new Pizza(5, "Hawaiana", ["Muzzarela", "Tomate", "Anana"], 1300);
let pizza6 = new Pizza(6, "Peperoni", ["Muzzarela", "Tomate", "Peperoni"], 700);

let arrayPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];


pizzaMenor600 = false;
pizzasImpar = "";

for (let i = 0; i < arrayPizzas.length; i++) {
    ingredientesDeLaPizza = ""

    if (arrayPizzas[i].id % 2 !== 0) {
        pizzasImpar = pizzasImpar + arrayPizzas[i].nombre + " | ";
    };

    if (arrayPizzas[i].precio < 600) {
        pizzaMenor600 = true;
    };

    console.log(`La Pizza ${arrayPizzas[i].nombre}, tiene un valor de ${arrayPizzas[i].precio}$`);

    for (let t = 0; t < arrayPizzas[i].ingredientes.length; t++) {
        ingredientesDeLaPizza = ingredientesDeLaPizza + arrayPizzas[i].ingredientes[t] + " - ";
    }
    console.log(`Los ingredientes son: ${ingredientesDeLaPizza}`);
    console.log("----------------------------");
}

if (pizzaMenor600 == true) {
    console.log("Existe una Pizza con un valor menor a 600$");
} else {
    console.log("NO existe una Pizza con un valor menor a 600$");
}

console.log(`Pizzas con ID impar: ${pizzasImpar}`);

/*let acumulador = 0;
let contador = 0;
let confirma;
do {
    let pizza = parseInt(prompt("¿Cuantas porciones de pizza quiere?"));
    acumulador += pizza;
    contador++;
    confirma = prompt("¿Desea pedir otra porción mas?").toLowerCase();
} while(confirma != "no"){

    console.log(`El promedio de porciones que pidió es de ${acumulador / contador}`);
}
class pizza{
    constructor(nombre, ingredientes, precio){
        this.nombre = nombre.toUpperCase();
        this.ingredientes = ingredientes.toLowerCase();
        this.precio = parseFloat(precio * 1.21);
    }
    precioPorcion(){
    this.precio = this.precio / 8;
    }
}
//declaracion del array de pizza para almacenar tipos de pizzas
const pizzas = [];

pizzas.push(new pizza ("margarita","salsa de tomate, mozzarella, albahaca, orégano, aceite de oliva", 6));
pizzas.push(new pizza ("cuatro Quesos","queso fontina, queso gorgonzola, queso parmesano, queso mozzarella", 9));
pizzas.push(new pizza ("napolitana","salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras, aceite de oliva", 7));
pizzas.push(new pizza ("carbonara","huevo, Queso parmesano, sal, pimienta", 8));
// con la iteracion del for...of pongo el precio por porcion de pizza
//for(const pizza of pizzas)
//pizza.precioPorcion();
//console.log(pizzas);
*/

//let pizzas = ["Margarita", "Cuatro Quesos", "Napolitana", "Carbonara"];

let lista = [
    {
        nombre: "Margarita",
        ingredientes: "Salsa de tomate, mozzarella, albahaca, orégano, aceite de oliva",
        precio: 6,
    },
    {
        nombre: "Cuatro Quesos",
        ingredientes: "Queso fontina, queso gorgonzola, queso parmesano, queso mozzarella",
        precio: 9,
    },
    {
        nombre: "Napolitana",
        ingredientes: "Salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras, aceite de oliva",
        precio: 7,
    },
    {
        nombre: "Carbonara",
        ingredientes: "Huevo, Queso parmesano, sal, pimienta",
        precio: 8,
    },
];
const ul = document.getElementById("lista");

lista.forEach((pizza, iPizza) => {

    const li = document.createElement("li");
    li.innerText = pizza.nombre;
    
    const subList = document.createElement("ul");
    
    const liIngredientes = document.createElement("li");
    liIngredientes.innerText = `Ingredientes: ${pizza.ingredientes}`;

    const liPrecio = document.createElement("li");
    liPrecio.innerText = `Precio: ${pizza.precio}`;
    ul.append(li);

    subList.append(liIngredientes);
    subList.append(liPrecio);
    li.append(subList);
});


let selectPizzas = document.getElementById("pizzas");

let optionNull = document.createElement("option");
optionNull.innerText = "Seleccionar Pizza";
optionNull.value = "";
selectPizzas.append(optionNull);

lista.forEach((pizza, iPizza) => {

    let option = document.createElement("option");
    option.innerText = lista.nombre;
    option.value = iPizza;

    selectPizzas.append(option);
});
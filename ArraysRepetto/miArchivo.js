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
*/
class pizza{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
//declaracion del array de pizza para almacenar tipos de pizzas
const pizzas = [];

pizzas.push(new pizza ("margarita", 6));
pizzas.push(new pizza ("cuatro Quesos", 7));
pizzas.push(new pizza ("napolitana", 7));
pizzas.push(new pizza ("carbonara", 8));
// con la iteracion del for...of le sumo el iva a cada tipo de pizza
for(const pizza of pizzas)
pizza.sumaIva();
//let margarita = ["salsa de tomate", "mozzarella", "albahaca", "orégano", "aceite de oliva", "6"];
//let cuatroQuesos = ["queso fontina", "queso gorgonzola", "queso parmesano", "queso mozzarella", "7"];
//let napolitana = ["salsa de tomate", "queso mozzarella", "anchoas", "orégano", "alcaparras", "aceite de oliva", "7"];
//let carbonara = ["huevo", "Queso parmesano", "sal", "pimienta", "8"];
//let productos = margarita.concat(cuatroQuesos, napolitana, carbonara);
console.log(pizzas);
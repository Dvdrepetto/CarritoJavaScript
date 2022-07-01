/*localStorage.setItem("nombre_de_pizza", "Margarita");
localStorage.setItem("precio", 20);
localStorage.setItem("ingredientes", "salsa");
localStorage.setItem("productos", ["arroz","fideos","huevos"]);


for(let i = 0; i < localStorage.length; i++){

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    console.log("key: " + key + " - value:" + value);
}
*/
let productos = [
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
function actualizarInputCantidadDeProductos () {

    // Obtenemos el array actual
    let productos = localStorage.getItem("productos");
    let arrayProductos = [];

    if(productos !== null) {

        // Obtengo el array por medio del método split para transformar el string a un array
        arrayProductos = productos.split(",");
    }

    inputCantidadDeProductos.value = arrayProductos.length;
}

function agregarALocalStorage (producto) {

    // Obtenemos los productos del localStorage
    const productos = localStorage.getItem("productos");
    let arrayProductos = [];

    if(productos !== null) {
        arrayProductos = JSON.parse(productos);
    }
    let productoEncontrado = arrayProductos.find((productoEnJSON)=> 
    {
    return productoEnJSON.nombre == producto.nombre;
});
    // Agregamos el nuevo producto al localStorage
    arrayProductos.push(productoEncontrado);

    // Setear el localStorage
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
}
function agregarALocalStorage (producto) {

    // Obtenemos el array actual
    let productos = localStorage.getItem("productos");
    let arrayProductos = [];

    // Si existe la key (es decir, tiene productos)
    if(productos !== null) {

        // Obtengo el array por medio del método split para transformar el string a un array
        arrayProductos = productos.split(",");
    }

    // Agrego al array el nombre del producto
    arrayProductos.push(producto.nombre);

    // Seteo la key "productos" con el nuevo array
    localStorage.setItem("productos", arrayProductos);

    actualizarInputCantidadDeProductos();
}

const contenedor = document.getElementById("contenedor");
const inputCantidadDeProductos = document.getElementById("cantidadDeProductos");

// Agregamos productos al DOM
productos.forEach( (producto) => {

    // Creamos el elemento lista
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText = producto.nombre;

    const li2 = document.createElement("li");
    li2.innerText = producto.precio;

    const li3 = document.createElement("li");
    li3.innerText = producto.ingredientes;

    const button = document.createElement("button");
    button.addEventListener("click", () => {

        agregarALocalStorage(producto);
    });
    button.innerText = "Agregar pizza";

    ul.append(li1, li2, li3, button);

    // Agregamos elemento al contenedor
    contenedor.append(ul);
});




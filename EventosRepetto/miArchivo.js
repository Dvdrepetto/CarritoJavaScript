let productos = [
    {
        nombre: "Margarita",
        ingredientes:
            "Salsa de tomate, mozzarella, albahaca, orégano, aceite de oliva",
        precio: 6,
    },
    {
        nombre: "Cuatro Quesos",
        ingredientes:
            "Queso fontina, queso gorgonzola, queso parmesano, queso mozzarella",
        precio: 9,
    },
    {
        nombre: "Napolitana",
        ingredientes:
            "Salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras, aceite de oliva",
        precio: 7,
    },
    {
        nombre: "Carbonara",
        ingredientes: "Huevo, Queso parmesano, sal, pimienta",
        precio: 8,
    },
];

function agregarProductoAHTML(producto) {
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerText = "Nombre: " + producto.nombre;

    let li2 = document.createElement("li");
    li2.innerText = "Ingredientes: " + producto.ingredientes;

    let li3 = document.createElement("li");
    li3.innerText = "Precio: " + producto.precio;
    
    ul.append(li1, li2, li3);

    contenedor.append(ul);
}

let contenedor = document.getElementById("contenedor");

let input = document.getElementById("input-1");

input.addEventListener("input", () => {
    let valor = input.value;

    let productosBuscados = productos.filter((producto) => {

        const indexOf = producto.nombre.indexOf(valor);

        if (indexOf === -1) {
            return false;
        }

        return true;

    });

    contenedor.innerHTML = "";

    if (productosBuscados.length > 0) {
        productosBuscados.forEach((producto) => {
            agregarProductoAHTML(producto);
        });
    }
});

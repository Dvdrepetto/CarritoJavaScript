const button = document.getElementById("boton1");
button.addEventListener("click", () => {
  Swal.fire({
    title: "Margarita",
    text: "Lorem Ipsum dolor sit amet",
    imageUrl: "/margarita.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

const button2 = document.getElementById("boton2");
button2.addEventListener("click", () => {
  Swal.fire({
    title: "Peperoni",
    text: "Lorem Ipsum dolor sit amet",
    imageUrl: "/peperoni.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

const button3 = document.getElementById("boton3");
button3.addEventListener("click", () => {
  Swal.fire({
    title: "Cuatro Quesos",
    text: "Lorem Ipsum dolor sit amet",
    imageUrl: "/cuatroQuesos.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

swalWithBootstrapButtons
  .fire({
    title: "Agregar pizza?",
    text: "No te pierdas esta promoción!",
    imageUrl: "/peperoni.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Si, Agregar!",
    cancelButtonText: "Mejor otra pizza!",
    reverseButtons: true,
  })
  .then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        "Gran Elección!",
        "tu pizza esta en el carrito",
        "success"
      );
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        "Podes elegir la que quieras",
        "todas estan riquisimas :)",
        "question"
      );
    }
  });


let acumulador = 0;
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

/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
*/
/*for(let i=1; i<=10; i++){// i= i +1
    console.log(i)
if (i == 5){
    break
}

}*/
/*
for(let i=1; i<=10; i++){// 2 % 2 == 0 muestra los impares
    
if (i % 2 == 0){
    continue
}
console.log(i)
}*/
//while bucle infinito

/*let repetir = true;
let acumulador = 0;
let contador = 0;

while (repetir) {
  // repetir == true
  let nota = parseInt(prompt("ingrese una nota"));
  acumulador += nota; // acumulador = acumulador + nota
  contador++;
  let confirma = prompt("¿desea ingresar otra nota más?").toLowerCase();//significa pasame el texto a minuscula;
  if (confirma == "no") {
    repetir = false; //esto es igual a  Break
  }
}
console.log(`El promedio de las notas es ${acumulador / contador} `);*/
/*
let acumulador = 0;
let contador = 0;

do  {
   repetir == true
  let nota = parseInt(prompt("ingrese una nota"));
  acumulador += nota; // acumulador = acumulador + nota
  contador++;
  var confirma = prompt("¿desea ingresar otra nota más?").toLowerCase();//significa pasame el texto a minuscula;
  while (confirma != "no") 
    repetir = false; //esto es igual a Break
  
}
console.log(`El promedio de las notas es ${acumulador / contador} `);*/

let numero1;
let numero2;
let operador;

do {
  numero1 = parseFloat(prompt("Ingrese un numero"));
  numero2 = parseFloat(prompt("Ingrese un numero"));
  operador = prompt("Ingrese una operacion (+,-,/,*)");
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("por favor ingresa un numero valido");
  }
} while (isNaN(numero1) || isNaN(numero2));

//      F             F        f

switch (operador) {
  case "+":
    alert(numero1 + numero2);
  case "-":
    alert(numero1 - numero2);
  case "/":
    alert(numero1 / numero2);
  case "*":
    alert(numero1 * numero2);
  default:
    alert("operacion no valida");
}
console.log(numero1 + numero2);

let numero = 2
/*
if(numero==2){
    console.log("Numero iual a 2")
}
*/
/*
let numero = 2 
if (numero %2) {
    //5 / 2 = 2.5 5%2 =1
}
else{

}
if (0) es siempre falso 
*/
let deudas = parseInt(prompt("ingrese unas deudas"))

//> < >= <=

if(deudas >= 0){
    console.log("no tengo deudas")
} else if(deudas >= -1000){
    console.log("deudas aceptable")
}else{
    console.log("Te fuiste de deudas")
}
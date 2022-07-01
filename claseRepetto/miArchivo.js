
let deudas = parseInt(prompt("ingresa tu deuda con nosotros"));

    if(deudas >= 0){
        console.log("No tenés deudas");
    } else if(deudas >= -1000){
        console.log("deudas aceptables");
    }else{
        console.log("Te fuiste de deudas");
    }
    while(deudas <= -1000){
        let proximaDeuda = 1.5;
        alert("Tu próxima deuda será de " + (deudas * proximaDeuda));
        break;
    }
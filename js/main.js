let option = prompt("Eliga una opcion: \n A. Aplicar impuesto al producto \n B. Aplicar descuento al producto").toUpperCase();

while(option != "ESC"){
    switch(option){
        case "A":
            let datoA = parseInt(prompt("Ingrese valor del producto para aplicar el impuesto"));
            aplicarImpuesto(datoA);
            option = "ESC";
            break;
        case "B":
            let datoB = parseInt(prompt("Ingrese valor del producto para aplicar el descuento"));
            aplicarDescuento(datoB);
            option = "ESC";
            break;
    }
}

// Funcion para aplicar los impuesto a los productos
function aplicarImpuesto(producto){
    if(producto <= 100){
        producto = producto + (producto * 0.1);
        alert("El producto más impuesto del 10% es: " + producto);
    }else if(producto <=1000){
        producto = producto + (producto * 0.05);
        alert("El producto más impuesto del 5% es: " + producto);
    }else{
        producto = producto + (producto * 0.03);
        alert("El producto más impuesto del 3% es: " + producto);
    }
}

// Funcion para aplicar el descuento a los productos
function aplicarDescuento(producto){
    if(producto <= 500){
        producto = producto - (producto* 0.1);
        alert("El producto con 10% de decuento queda en: " + producto);
    }else if(producto <= 1500){
        producto = producto - (producto* 0.15);
        alert("El producto con 15% de decuento queda en: " + producto);
    }else{
        producto = producto - (producto* 0.2);
        alert("El producto con 20% de decuento queda en: " + producto);
    }
}
let option = prompt("Eliga una opcion: \n A. Crear tabla de multiplicacion \n B. Repetir letra/frase").toUpperCase();

while(option != "ESC"){
    switch(option){
        case "A":
            let dato = parseInt(prompt("Ingrese numero que desea para formar la tabla"));
            
                for(let i = 1 ; i <= 10 ; i++){
                    let aux = dato + " X " + i + " = " + dato*i ;
                    console.log(aux);
                    mostrarEnPantalla(aux);

                }
                option = "ESC";
            break;
        case "B":
                let word = prompt("Ingrese palabra a repetir");
                let rep = parseInt(prompt("Ingrese cantidad de repeticiones"));
                let aux = 0;
                while(aux < rep){
                    console.log(word);
                    aux++;
                    mostrarEnPantalla(word);
                    
                }
                option = "ESC";
            break;
    }
}

function mostrarEnPantalla(contenido){
    let p = document.createElement("p");
    let container = document.getElementById("container");
    p.innerHTML = contenido ;
    container.appendChild(p);
}
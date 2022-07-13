function actualizarDatos(){
    cargarEstudianteACombo();
    mostrarPorcentaje();
    mostrarDatosEnTabla();   
}

function validarEstudiante(){
    let aux = false;
    if(sistema.buscarEstudianteXCedula(document.getElementById("cedulaEstudianteInscripcion").value) === undefined){
        aux = true;
    }
    return aux
}

function primeraMayuscula(texto){
    let aux = texto[0].toUpperCase();
    for(let i = 1 ; i < texto.length ; i++){
        aux += texto[i];
    }
    return aux
}

function crearTabla(tabla, elem){
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda3 = fila.insertCell();
    celda1.innerHTML= elem.nombre;
    celda2.innerHTML= elem.apellido;
    celda3.innerHTML= elem.cedula;
}

function mostrarDatosEnTabla(){
    document.getElementById("tablaA").innerHTML = "";
    document.getElementById("tablaR").innerHTML = "";
    document.getElementById("tablaI").innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        if(elem.aprobado){
            crearTabla(document.getElementById("tablaA"), elem);
            crearTabla(document.getElementById("tablaI"), elem);
        }else{
            crearTabla(document.getElementById("tablaR"), elem);
            crearTabla(document.getElementById("tablaI"), elem);
        }
    }
}

function mostrarPorcentaje(){
    document.getElementById("porcentajeAprobado").innerHTML = "Porcentaje de estudiantes aprobados: " + sistema.porcentajeEstudiantes()[0] + "%";
    document.getElementById("porcentajeReprobado").innerHTML = "Porcentaje de estudiantes reprobados: " + sistema.porcentajeEstudiantes()[1] + "%";
}


function primeraInscripcion(){
    let container = document.getElementById("containerI");
    if(sistema.listaEstudiantes.length == 0){
        container.className = "container-inscripcion-estudiante-primer"
    }else{
        container.className = "container-inscripcion-estudiante"
    }
}

function inicio(){
    obtenerEstudiantes();
    //listaEstudiantesInscripto();
    actualizarDatos();
}
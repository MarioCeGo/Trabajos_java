window.onload = () =>{inicioAdministracion()}
document.getElementById("botonAOREstudiante").onclick = () => {aprobarOReprobar()};
document.getElementById("estudiantesInscripto").onclick = () => {statusEnCombo()};
document.getElementById("botonBorrarEstudiante").onclick = () => {borrarEstudiante()};

// Variables
const combo = document.getElementById("estudiantesInscripto");
const btnAR = document.getElementById("botonAOREstudiante");

// Funciones
function aprobarOReprobar(){
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.aprobado){
                    elem.aprobado = false;
                    guardarEstudiantes();
                    actualizarDatos();
                    mostrarToastify("REPROBO");
                }else{
                    elem.aprobado = true;
                    guardarEstudiantes();
                    actualizarDatos();
                    mostrarToastify("APROBO");
                }
            }
        }
    }else{
        mostrarToastify("ASE");
    }
    btnAR.innerHTML = "Aprobar o Reprobar";
    btnAR.className = "btn";
}

function borrarEstudiante(){
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){ 
            if(elem.cedula == combo.value){
                ventanaInfo("ADVERTENCIAGRAVE");
            }
        }
    }
}

function statusEnCombo(){
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.aprobado){
                    btnAR.innerHTML = "Reprobar";
                    btnAR.className = "btn btn-reprobar";
                }else{
                    btnAR.innerHTML = "Aprobar";
                    btnAR.className = "btn btn-aprobar";
                }
            }
        }
    }
}

function crearTabla(tabla, elem){
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda3 = fila.insertCell();
    celda1.innerHTML= `${elem.primerNombre} ${elem.segundoNombre}`;
    celda2.innerHTML= `${elem.primerApellido} ${elem.segundoApellido}`;
    celda3.innerHTML= elem.cedula;
}

function mostrarDatosEnTabla(){
    document.getElementById("tablaEstudiantesAprobados").innerHTML = "";
    document.getElementById("tablaEstudiantesReprobados").innerHTML = "";
    document.getElementById("tablaEstudiantesInscripto").innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        if(elem.aprobado){
            crearTabla(document.getElementById("tablaEstudiantesAprobados"), elem);
            crearTabla(document.getElementById("tablaEstudiantesInscripto"), elem);
        }else{
            crearTabla(document.getElementById("tablaEstudiantesReprobados"), elem);
            crearTabla(document.getElementById("tablaEstudiantesInscripto"), elem);
        }
    }
}



function inicioAdministracion(){
    obtenerEstudiantes();
    cargarEstudianteACombo();
    mostrarDatosEnTabla();
    mostrarPorcentaje();
}
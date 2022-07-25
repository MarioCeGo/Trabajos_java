window.onload = () =>{inicioAdministracion()}
document.getElementById("botonAOREstudiante").onclick = () => {aprobarOReprobar()};
document.getElementById("estudiantesInscripto").onclick = () => {btnAR()};
document.getElementById("botonBorrarEstudiante").onclick = () => {borrarEstudiante()};

function aprobarOReprobar(){
    let combo = document.getElementById("estudiantesInscripto");
    let btn = document.getElementById("botonAOREstudiante");
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.aprobado){
                    elem.aprobado = false;
                    guardarEstudiantes();
                    actualizarDatos();
                    Toastify({
                        text: `${elem.primerNombre} ${elem.primerApellido} reprobó el curso`,
                        duration: 2000,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#f44336"
                        }
                    }).showToast();
                }else{
                    elem.aprobado = true;
                    guardarEstudiantes();
                    actualizarDatos();
                    Toastify({
                        text: `${elem.primerNombre} ${elem.primerApellido} aprobó el curso`,
                        duration: 2000,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#4CAF50"
                        }
                    }).showToast();
                }
            }
        }
    }else{
        Toastify({
            text: "Seleccione estudiante!",
            duration: 2000,
            gravity: "bottom",
            position: "right"
        }).showToast();
    }
    btn.innerHTML = "Aprobar o Reprobar";
    btn.className = "btn";
}

function borrarEstudiante(){
    let combo = document.getElementById("estudiantesInscripto");
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){ 
            if(elem.cedula == combo.value){
                ventanaInfo("ADVERTENCIAGRAVE");
            }
        }
    }
}

function btnAR(){
    let combo = document.getElementById("estudiantesInscripto");
    let btn = document.getElementById("botonAOREstudiante");
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.aprobado){
                    btn.innerHTML = "Reprobar";
                    btn.className = "btn btn-reprobar";
                }else{
                    btn.innerHTML = "Aprobar";
                    btn.className = "btn btn-aprobar";
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
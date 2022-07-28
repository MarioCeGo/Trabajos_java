const modal = document.getElementById("modal");


document.getElementById("crearAbrirCuenta").onclick = () => {ventanaInfo("CUENTA")}

function cargarEstudianteACombo(){
    combo.innerHTML = ` <option value="0" disabled selected>Seleccione estudiante</option>`
    for(let elem of sistema.listaEstudiantes){

        if(elem.aprobado){
            let option = document.createElement("option");
            option.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "aprobado";
            combo.appendChild(option);

        }else{
            let option = document.createElement("option");
            option.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "reprobado";
            combo.appendChild(option);
        }
    }
}

function confirmarBorrado(){
    sistema.eliminarEstudiante(combo.value);
    actualizarDatos();
    guardarEstudiantes();
    cerrarModal();
}

function actualizarDatos(){
    cargarEstudianteACombo();
    mostrarPorcentaje();
    mostrarDatosEnTabla();   
}

function primeraMayuscula(texto){
    let aux = "";
    if(texto != ""){
        aux = texto[0].toUpperCase();
        for(let i = 1 ; i < texto.length ; i++){
            aux += texto[i];        
        }
    }
    return aux;
}

function mostrarToastify(tipo){
    if(tipo == "REPROBO"){
        Toastify({
            text: `${elem.primerNombre} ${elem.primerApellido} reprobó el curso`,
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#f44336"
            }
        }).showToast();
    }else if(tipo == "APROBO"){
        Toastify({
            text: `${elem.primerNombre} ${elem.primerApellido} aprobó el curso`,
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#4CAF50"
            }
        }).showToast();        
    }else if(tipo == "ASE"){
        //ASE -> Aviso Seleccione Estudiante
        Toastify({
            text: "Seleccione estudiante!",
            duration: 2000,
            gravity: "bottom",
            position: "right"
        }).showToast();
    }
}

function mostrarPorcentaje(){
    document.getElementById("porcentajeAprobado").innerHTML = "Porcentaje de estudiantes aprobados: " + sistema.porcentajeEstudiantes()[0] + "%";
    document.getElementById("porcentajeReprobado").innerHTML = "Porcentaje de estudiantes reprobados: " + sistema.porcentajeEstudiantes()[1] + "%";
}

function guardarEstudiantes(){
    localStorage.setItem("listaEstudiantes", JSON.stringify(sistema.listaEstudiantes));
}

function obtenerEstudiantes(){
    sistema.listaEstudiantes = ((JSON.parse(localStorage.getItem("listaEstudiantes")) || []));
}
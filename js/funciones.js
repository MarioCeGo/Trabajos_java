const modal = document.getElementById("modal");

document.getElementById("crearAbrirCuenta").onclick = () => {ventanaInfo("CUENTA")}

function cargarEstudianteACombo(){
    document.getElementById("estudiantesInscripto").innerHTML = ` <option value="0" disabled selected>Seleccione estudiante</option>`
    for(let elem of sistema.listaEstudiantes){

        if(elem.aprobado){
            let option = document.createElement("option");
            option.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "aprobado";
            document.getElementById("estudiantesInscripto").append(option);

        }else{
            let option = document.createElement("option");
            option.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "reprobado";
            document.getElementById("estudiantesInscripto").append(option);
        }
    }
}

function confirmarBorrado(){
    sistema.eliminarEstudiante(document.getElementById("estudiantesInscripto").value);
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

function mostrarPorcentaje(){
    document.getElementById("porcentajeAprobado").innerHTML = "Porcentaje de estudiantes aprobados: " + sistema.porcentajeEstudiantes()[0] + "%";
    document.getElementById("porcentajeReprobado").innerHTML = "Porcentaje de estudiantes reprobados: " + sistema.porcentajeEstudiantes()[1] + "%";
}

function guardarEstudiantes(){
    localStorage.setItem("listaEstudiantes", JSON.stringify(sistema.listaEstudiantes));
}

function obtenerEstudiantes(){
    let estudiantes = JSON.parse(localStorage.getItem("listaEstudiantes")) || [];
    sistema.listaEstudiantes = (estudiantes);
}

function guardarCuentasProfesores(){
    localStorage.setItem("cuentasProfesores", JSON.stringify(sistema.cuentasProfesores));
}

function obtenerCuentasProfesores(){
    let cuentasProfesores = JSON.parse(localStorage.getItem("cuentasProfesores")) || [];
    sistema.cuentasProfesores = (cuentasProfesores);
}
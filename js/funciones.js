const modal = document.getElementById("modal");

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

function ventanaInfo(tipo){
    modal.className = "modal";
    
    if(tipo == "ADVERTENCIAGRAVE"){
        modal.innerHTML = `
        <div class="modal-info modal-info-advertencia">
            <img src="../images/modal/advertencia_grave.png" alt="">
            <h2>Advertencia</h2>
            <p>Esta a punto de borrar un estudiante, presione <span>ENTER</span> para confirmar, o cualquier otra tecla para abortar.</p>
            <button id="btnConfirmarBorrado" class="btn">Borrar</button>
            <button id="btnCerrarModal" class="btn">Cancelar</button>
        </div>`;
        document.getElementById("btnConfirmarBorrado").onclick = () => {confirmarBorrado()};
        document.getElementById("btnCerrarModal").onclick = () => {cerrarModal()};
    }else if(tipo == "ADVERTENCIA"){
        modal.innerHTML = `
        <div class="modal-info modal-info-advertencia">
            <img src="../images/modal/advertencia.png" alt="">
            <h2>Advertencia</h2>
            <p>El estudiante ya esta inscripto!</p>
            <button id="btnCerrarModal" class="btn">Ok</button>
        </div>`;
        document.getElementById("btnCerrarModal").onclick = () => {cerrarModal()};
    }
}

function cerrarModal(){
    modal.innerHTML = "";
    modal.className = "";
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
    sistema.listaEstudiantes = ((JSON.parse(localStorage.getItem("listaEstudiantes")) || []));
}
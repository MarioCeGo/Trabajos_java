function crearEstudiante(){
    let aviso = document.getElementById("avisoInscripcion");
    let form = document.getElementById("formularioInscripcion");
    if(validarEstudiante() && form.reportValidity()){
        let nombre = document.getElementById("nombreEstudianteI").value;
        let apellido = document.getElementById("apellido-estudianteI").value;
        let cedula = document.getElementById("cedula-estudianteI").value;
        
        sistema.agregarEstudiante(new Estudiante(primeraMayuscula(nombre), primeraMayuscula(apellido), cedula));
        actualizarDatos();
        form.reset();
        aviso.innerHTML = "Estudiante inscripto con EXITO!";
    }else if(!validarEstudiante()){
        aviso.innerHTML = "El estudiante YA esta inscripto";
    }
}

function cargarEstudianteACombo(){
    let combo = document.getElementById("estudiantes");
    combo.innerHTML = ` <option value="0" disabled selected>Seleccione estudiante</option>`
    for(let elem of sistema.listaEstudiantes){
        if(elem.aprobado){
            let option = document.createElement("option");
            option.innerHTML = `${elem.nombre} | ${elem.apellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "aprobado"
            combo.append(option);
        }else{
            let option = document.createElement("option");
            option.innerHTML = `${elem.nombre} | ${elem.apellido} | ${elem.cedula}`;
            option.value = elem.cedula;
            option.className = "reprobado"
            combo.append(option);
        }
    }
}

function aprobarOReprobar(){
    let combo = document.getElementById("estudiantes");
    let avisoARB = document.getElementById("avisoARB");
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.aprobado){
                    elem.aprobado = false;
                    actualizarDatos();
                    avisoARB.innerHTML = `${elem.nombre} ${elem.apellido} reprobó el curso`;
                }else{
                    elem.aprobado = true;
                    actualizarDatos();
                    avisoARB.innerHTML = `${elem.nombre} ${elem.apellido} aprobó el curso`;
                }
            }
        }
    }else{
        avisoARB.innerHTML = "Seleccione un o una estudiante!"
    }
}

function borrarEstudiante(){
    let combo = document.getElementById("estudiantes");
    let avisoARB = document.getElementById("avisoARB");
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){ 
            if(elem.cedula == combo.value){
                avisoARB.innerHTML = "Presione ENTER para confirar, o cualquier tecla para cancelar";
                document.addEventListener("keydown", confirmarBorrado);
            }
        }
    }else{
        avisoARB.innerHTML = "Seleccione un o una estudiante!";
    }
}

function confirmarBorrado(event){
    if(event.key === "Enter"){
        sistema.eliminarEstudiante(document.getElementById("estudiantes").value);
        document.getElementById("avisoARB").innerHTML = "Se borro el estudiante";
        actualizarDatos();
    }else{
        document.getElementById("avisoARB").innerHTML = "Se aborto la tarea";
    }
    document.removeEventListener("keydown", confirmarBorrado);
}

function actualizarDatos(){
    cargarEstudianteACombo();
    mostrarPorcentaje();
    mostrarDatosEnTabla();   
}

function validarEstudiante(){
    let aux = false;
    if(sistema.buscarEstudianteXCedula(document.getElementById("cedula-estudianteI").value) === undefined){
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


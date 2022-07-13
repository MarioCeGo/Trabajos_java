window.onload = () =>{inicioInscripcion()};
document.getElementById("inscribirEstudiante").onclick = () => {crearEstudiante()};

function crearEstudiante(){
    let form = document.getElementById("formularioInscripcion");
    if(validarEstudiante() && form.reportValidity()){

        let primerNombre = document.getElementById("primerNombreEstudianteInscripcion").value;
        let segundoNombre = document.getElementById("segundoNombreEstudianteInscripcion").value;
        let primerApellido = document.getElementById("primerApellidoEstudianteInscripcion").value;
        let segundoApellido = document.getElementById("segundoApellidoEstudianteInscripcion").value;
        let cedula = document.getElementById("cedulaEstudianteInscripcion").value;
        
        sistema.agregarEstudiante(new Estudiante(primeraMayuscula(primerNombre), primeraMayuscula(segundoNombre), primeraMayuscula(primerApellido), primeraMayuscula(segundoApellido), cedula));

        listaEstudiantesInscripto();
        guardarEstudiantes();
        form.reset();
        
    }else if(!validarEstudiante()){
        ventanaInfo("ADVERTENCIA");
        
    }
}

function listaEstudiantesInscripto(){
    let lista = document.getElementById("listaEstudiantesInscripto");
    lista.innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        let li = document.createElement("li");
        li.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
        lista.append(li);
    }
}

function inicioInscripcion(){
    obtenerEstudiantes();
    listaEstudiantesInscripto();
}


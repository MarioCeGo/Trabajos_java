window.onload = () =>{inicioInscripcion()};
document.getElementById("inscribirEstudiante").onclick = () => {crearEstudiante()};

function crearEstudiante(){
    let form = document.getElementById("formularioInscripcion");
    let validarEstudiante = (sistema.buscarEstudianteXCedula(document.getElementById("cedulaEstudianteInscripcion").value) === undefined ) ? true : false ;
    if(validarEstudiante && form.reportValidity()){

        let primerNombre = document.getElementById("primerNombreEstudianteInscripcion").value;
        let segundoNombre = document.getElementById("segundoNombreEstudianteInscripcion").value;
        let primerApellido = document.getElementById("primerApellidoEstudianteInscripcion").value;
        let segundoApellido = document.getElementById("segundoApellidoEstudianteInscripcion").value;
        let cedula = document.getElementById("cedulaEstudianteInscripcion").value;
        let fechaNacimiento = document.getElementById("fechaNacimientoEstudianteInscripcion").value;
        
        sistema.agregarEstudiante(new Estudiante(primeraMayuscula(primerNombre), primeraMayuscula(segundoNombre), primeraMayuscula(primerApellido), primeraMayuscula(segundoApellido), cedula));
        sistema.listaEstudiantes.length>0 ? (document.getElementById("btnFormAE").className = "btn btn-tertiary") : false ;

        listaEstudiantesInscripto();
        guardarEstudiantes();
        form.reset();
        
    }else if(!validarEstudiante){
        ventanaInfo("ADVERTENCIA");
    }
}

function listaEstudiantesInscripto(){
    document.getElementById("listaEstudiantesInscripto").innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        let li = document.createElement("li");
        li.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
        document.getElementById("listaEstudiantesInscripto").append(li);
    }
}

function inicioInscripcion(){
    obtenerEstudiantes();
    listaEstudiantesInscripto();
    sistema.listaEstudiantes.length>0 ? (document.getElementById("btnFormAE").className = "btn btn-tertiary") : false ;
}


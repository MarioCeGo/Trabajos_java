window.onload = () =>{inicioInscripcion()};

const form = document.getElementById("formularioInscripcion");
const primerNombre = document.getElementById("primerNombreEstudianteInscripcion");
const segundoNombre = document.getElementById("segundoNombreEstudianteInscripcion");
const primerApellido = document.getElementById("primerApellidoEstudianteInscripcion");
const segundoApellido = document.getElementById("segundoApellidoEstudianteInscripcion");
const cedula = document.getElementById("cedulaEstudianteInscripcion");
const fechaNacimiento = document.getElementById("fechaNacimientoEstudianteInscripcion");
const listaEstudiantesInscripto = document.getElementById("listaEstudiantesInscripto");
const btnFormAE = document.getElementById("btnFormAE");

// function crearEstudiante(){
//     let validarEstudiante = (sistema.buscarEstudianteXCedula(cedula.value) === undefined ) ? true : false;
//     if(validarEstudiante && form.reportValidity()){
//         let estudiante = new Estudiante(primeraMayuscula(primerNombre.value), primeraMayuscula(segundoNombre.value), primeraMayuscula(primerApellido.value), primeraMayuscula(segundoApellido.value), cedula.value, fechaNacimiento.value);
//         sistema.agregarEstudiante(estudiante);
//         registrarEstudiante(estudiante);
//         sistema.listaEstudiantes.length>0 ? (btnFormAE.className = "btn btn-tertiary") : false ;
//         form.reset();
        
//     }else if(!validarEstudiante){
//         ventanaInfo("ADVERTENCIA");
//     }
// }

function mostrarEstudiantesInscripto(){
    listaEstudiantesInscripto.innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        let li = document.createElement("li");
        li.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula} | ${elem.fechaNacimiento}`;
        listaEstudiantesInscripto.appendChild(li);
    }
}

function inicioInscripcion(){
    // let resp = await fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes");
    // let data = await resp.json();
    // sistema.listaEstudiantes = [...data].sort((a,b) => {return (a.primerApellido).localeCompare(b.primerApellido)});
    obtenerSesionTemporal();
    inicioSesion[inicioSesion.length-1] ? "" : obtenerEstudiantes();
    mostrarEstudiantesInscripto();
    obtenerSesionTemporal();
    sistema.listaEstudiantes.length>0 ? (btnFormAE.className = "btn btn-tertiary") : false ;
    document.getElementById("inscribirEstudiante").onclick = () => {crearEstudiante()};
}






function crearEstudiante(){
    let validarEstudiante = (sistema.buscarEstudianteXCedula(cedula.value) === undefined ) ? true : false;
    if(validarEstudiante && form.reportValidity()){
        let estudiante = new Estudiante(primeraMayuscula(primerNombre.value), primeraMayuscula(segundoNombre.value), primeraMayuscula(primerApellido.value), primeraMayuscula(segundoApellido.value), cedula.value, fechaNacimiento.value);
        if(inicioSesion[inicioSesion.length-1]){
            inicioSesion[inicioSesion.length-2].push(estudiante);
            registrarEstudianteProfesor();
        }else{
            sistema.agregarEstudiante(estudiante);
            //listaEstudiantesInscripto();
            guardarEstudiantes();
            mostrarEstudiantesInscripto();
            sistema.listaEstudiantes.length>0 ? (btnFormAE.className = "btn btn-tertiary") : false ;          
        }   
        form.reset();
    }else if(!validarEstudiante){
        ventanaInfo("ADVERTENCIA");
    }
}
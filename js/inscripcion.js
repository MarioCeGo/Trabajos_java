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

function crearEstudiante(){
    let validarEstudiante = (sistema.buscarEstudianteXCedula(cedula.value) === undefined ) ? true : false;
    if(validarEstudiante && form.reportValidity()){
        let estudiante = new Estudiante(primeraMayuscula(primerNombre.value), primeraMayuscula(segundoNombre.value), primeraMayuscula(primerApellido.value), primeraMayuscula(segundoApellido.value), cedula.value, fechaNacimiento.value);
        sistema.agregarEstudiante(estudiante);
        registrarEstudiante(estudiante);
        sistema.listaEstudiantes.length>0 ? (btnFormAE.className = "btn btn-tertiary") : false ;
        form.reset();
        
    }else if(!validarEstudiante){
        ventanaInfo("ADVERTENCIA");
    }
}

function registrarEstudiante(estudiante){
    fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes",{
        method: "POST",
        body: JSON.stringify(estudiante),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        mostrarToastify("INSCRIPTO");
        mostrarEstudiantesInscripto();
    })
}

function mostrarEstudiantesInscripto(){
    listaEstudiantesInscripto.innerHTML = "";
    for(let elem of sistema.listaEstudiantes){
        let li = document.createElement("li");
        li.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula} | ${elem.fechaNacimiento}`;
        listaEstudiantesInscripto.appendChild(li);
    }
}

async function inicioInscripcion(){
    let resp = await fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes");
    let data = await resp.json();
    sistema.listaEstudiantes = [...data].sort((a,b) => {return (a.primerApellido).localeCompare(b.primerApellido)});
    sistema.listaEstudiantes.length != 0 ?mostrarEstudiantesInscripto() : false ;
    sistema.listaEstudiantes.length>0 ? (btnFormAE.className = "btn btn-tertiary") : false ;
    document.getElementById("inscribirEstudiante").onclick = () => {crearEstudiante()};
}
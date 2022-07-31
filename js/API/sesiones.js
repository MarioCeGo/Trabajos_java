const inicioSesion = [];

function registrarProfesor(profesor){
    fetch("https://62e2a74fb54fc209b87df028.mockapi.io/profesores",{
        method: "POST",
        body: JSON.stringify(profesor),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(()=>{cerrarModal(); window.location.href="../pages/configCuenta.html";});
}

function iniciarCuentaProfesore(email, password){
    fetch("https://62e2a74fb54fc209b87df028.mockapi.io/profesores")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach( (prof) =>{
            if( (prof.email == email) && (prof.password == password) ){
                let profesor = [prof.id, prof.primerNombre, prof.segundoNombre, prof.primerApellido, prof.segundoApellido, prof.email, prof.password, prof.fechaNacimiento, prof.listaEstudiantes, true].forEach( (elem) => inicioSesion.push(elem));
            }
        })
        sistema.listaEstudiantes = [];
        sessionStorage.setItem("listaEstudiantes", JSON.stringify(sistema.listaEstudiantes));
        alert("Se inicio sesion");
        guardarSesionTemporal();
    })
}

function estadoSesion(inicioSesion){
    if(inicioSesion[2]){
        
    }else{
        
    }
}

function actualizarDatosSesion(){
    fetch(`https://62e2a74fb54fc209b87df028.mockapi.io/profesores${inicioSesion[0]}`)
    .then( (resp) => resp.json() )
    .then( (data) => {
        data.forEach( (prof) =>{
            let actualizacion = [prof.id, prof.primerNombre, prof.segundoNombre, prof.primerApellido, prof.segundoApellido, prof.email, prof.password, prof.fechaNacimiento, prof.listaEstudiantes, true].forEach( (elem) => inicioSesion.push(elem));
        })
    })
    guardarSesionTemporal();
}

function guardarSesionTemporal(){
    sessionStorage.setItem("sesionActiva", JSON.stringify(inicioSesion));
}

function obtenerSesionTemporal(){
    let sesion = ((JSON.parse(sessionStorage.getItem("sesionActiva")) || []));
    sesion.forEach( (elem) => inicioSesion.push(elem) )
}

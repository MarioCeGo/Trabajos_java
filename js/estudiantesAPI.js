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

function registrarEstudianteProfesor(){
    fetch(`https://62e2a74fb54fc209b87df028.mockapi.io/profesores/${inicioSesion[0]}`,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listaEstudiantes: inicioSesion[inicioSesion.length-2] })
    })
    .then(()=>{
        mostrarToastify("INSCRIPTO");
    }) 
}

function mostrarEstudiantesAPI(data){
    let lista = document.getElementById("listaAdministrarEstudiante");
    lista.innerHTML = "";
    let status;
    for(let elem of data){
        elem.aprobado ? status = "aprobado" : status = "reprobado";
        let li = document.createElement("li");
        li.id = elem.id;
        li.innerHTML = 
        `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula} <button class="btn" value="${status}">${status}</button> <div class="status-estudiante ${status}"></div>`;
        lista.appendChild(li);
    }
}


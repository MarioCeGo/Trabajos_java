window.onload = () =>{inicioAdministracion()}

const combo = document.getElementById("estudiantesInscripto");
const btnAR = document.getElementById("botonAOREstudiante");

// function aprobarOReprobar(){
//     let estudiante;
//     if(combo.value != 0){
//         for (let elem of sistema.listaEstudiantes){
//             if(elem.cedula == combo.value){
//                 elem.status ? elem.status = false : elem.status = true;
//                 estudiante = elem;
//             }
//         }
//         fetch(`https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes/${estudiante.id}`,{
//                         method: "PUT",
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify({ status: estudiante.status })
//                     })
//                     .then(()=>{
//                         actualizarDatosSesion();
//                         actualizarDatos();
//                         estudiante.status ? mostrarToastify("APROBO", estudiante) : mostrarToastify("REPROBO", estudiante);
//                     })
//     }else{
//         mostrarToastify("ASE");
//     }
//     btnAR.innerHTML = "Aprobar o Reprobar";
//     btnAR.className = "btn";
// }

function aprobarOReprobar(){
    let estudiante;
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                elem.status ? elem.status = false : elem.status = true;
                estudiante = elem;
            }
        }
        fetch(`https://62e2a74fb54fc209b87df028.mockapi.io/profesores/${inicioSesion[0]}`,{
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: estudiante.status })
                    })
                    .then(()=>{
                        actualizarDatosSesion();
                        actualizarDatos();
                        estudiante.status ? mostrarToastify("APROBO", estudiante) : mostrarToastify("REPROBO", estudiante);
                    })
    }else{
        mostrarToastify("ASE");
    }
    btnAR.innerHTML = "Aprobar o Reprobar";
    btnAR.className = "btn";
}

function borrarEstudiante(){
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){ 
            elem.cedula == combo.value ? ventanaInfo("ADVERTENCIAGRAVE",elem.id): false ;
        }
    }else{
        mostrarToastify("ASE");
    }
}

function statusEnCombo(){
    if(combo.value != 0){
        for (let elem of sistema.listaEstudiantes){
            if(elem.cedula == combo.value){
                if(elem.status){
                    btnAR.innerHTML = "Reprobar";
                    btnAR.className = "btn btn-reprobar";
                }else{
                    btnAR.innerHTML = "Aprobar";
                    btnAR.className = "btn btn-aprobar";
                }
            }
        }
    }
}

function mostrarEstudiantesEnLista(estudiantes){
    let lista = document.getElementById("listaAdministrarEstudiante");
    lista.innerHTML = "";
    let statusAOR;
    for(let elem of estudiantes){
        elem.status ? statusAOR = "aprobado" : statusAOR = "reprobado";
        let li = document.createElement("li");
        li.id = elem.cedula
        li.innerHTML = 
        `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula} <div class="status-estudiante ${statusAOR}"></div>`;
        lista.appendChild(li);
    }
}

function inicioAdministracion(){
    obtenerSesionTemporal();
    cargarEstudianteACombo(inicioSesion[inicioSesion.length-2]);
    mostrarEstudiantesEnLista(inicioSesion[inicioSesion.length-2]);
    mostrarPorcentaje();
    document.getElementById("botonAOREstudiante").onclick = () => {aprobarOReprobar()};
    document.getElementById("estudiantesInscripto").onclick = () => {statusEnCombo()};
    document.getElementById("botonBorrarEstudiante").onclick = () => {borrarEstudiante()};
}

// async function inicioAdministracion(){
//     let resp = await fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes");
//     let data = await resp.json();
//     sistema.listaEstudiantes = [...data].sort((a,b) => {return (a.primerApellido).localeCompare(b.primerApellido)});
//     //cargarEstudianteACombo();
//     cargarEstudianteACombo(inicioSesion[inicioSesion.length-2])
//     mostrarEstudiantesEnLista();
//     mostrarPorcentaje();
//     obtenerSesionTemporal();
//     document.getElementById("botonAOREstudiante").onclick = () => {aprobarOReprobar()};
//     document.getElementById("estudiantesInscripto").onclick = () => {statusEnCombo()};
//     document.getElementById("botonBorrarEstudiante").onclick = () => {borrarEstudiante()};
// }


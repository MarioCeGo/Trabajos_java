const modal = document.getElementById("modal");

document.getElementById("crearAbrirCuenta").onclick = () => {ventanaInfo("CUENTA")}

function cargarEstudianteACombo(estudiantes){
    combo.innerHTML = ` <option value="0" disabled selected>Seleccione estudiante</option>`
    for(let elem of estudiantes){
        let option = document.createElement("option");
        option.innerHTML = `${elem.primerNombre} ${elem.segundoNombre} ${elem.primerApellido} ${elem.segundoApellido} | ${elem.cedula}`;
        option.value = elem.id;
        combo.appendChild(option);
    }
}



function confirmarBorrado(dato){
    fetch(`https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes/${dato}`,{
        method: "DELETE",
    })
    .then(()=>{
        actualizarDatos();
        guardarEstudiantes();
        cerrarModal();
        btnAR.innerHTML = "Aprobar o Reprobar";
        btnAR.className = "btn";
    })
    
}

// async function actualizarDatos(){
//     let resp = await fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes");
//     let data = await resp.json();
//     sistema.listaEstudiantes = [...data].sort((a,b) => {return (a.primerApellido).localeCompare(b.primerApellido)});
//     cargarEstudianteACombo();
//     mostrarPorcentaje();
//     mostrarEstudiantesEnLista();  
// }

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

function mostrarToastify(tipo, estudiante){
    if(tipo == "REPROBO"){
        Toastify({
            text: `${estudiante.primerNombre} ${estudiante.primerApellido} reprobó el curso`,
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#f44336"
            }
        }).showToast();
    }else if(tipo == "APROBO"){
        Toastify({
            text: `${estudiante.primerNombre} ${estudiante.primerApellido} aprobó el curso`,
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#4CAF50"
            }
        }).showToast();        
    }else if(tipo == "ASE"){
        //ASE -> Aviso Seleccione Estudiante
        Toastify({
            text: "Seleccione estudiante!",
            duration: 2000,
            gravity: "bottom",
            position: "right"
        }).showToast();
    }else if(tipo == "INSCRIPTO"){
        Toastify({
            text: "Estudiante inscripto!",
            duration: 2000,
            gravity: "bottom",
            position: "right"
        }).showToast();
    }
}

function mostrarPorcentaje(){
    document.getElementById("porcentajeAprobado").innerHTML = "Porcentaje de estudiantes aprobados: " + sistema.porcentajeEstudiantes()[0] + "%";
    document.getElementById("porcentajeReprobado").innerHTML = "Porcentaje de estudiantes reprobados: " + sistema.porcentajeEstudiantes()[1] + "%";
}

function guardarEstudiantes(){
    sessionStorage.setItem("listaEstudiantes", JSON.stringify(sistema.listaEstudiantes));
}

function obtenerEstudiantes(){
    if(inicioSesion[inicioSesion.length-1]){

    }else{
        sistema.listaEstudiantes = ((JSON.parse(sessionStorage.getItem("listaEstudiantes")) || []));
    }
}



function actualizarDatos(){
    if(inicioSesion[inicioSesion.length-1]){
        console.log(inicioSesion[inicioSesion.length-2]);
        //cargarEstudianteACombo(inicioSesion[inicioSesion.length-2]);
    }else{
        //cargarEstudianteACombo(sistema.listaEstudiantes);
    }
    mostrarPorcentaje();
    mostrarEstudiantesEnLista();  
}
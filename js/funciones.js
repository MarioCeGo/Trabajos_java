function cargarEstudianteACombo(){
    combo.innerHTML = ` <option value="0" disabled selected>Seleccione estudiante</option>`
    for(let elem of sistema.listaEstudiantes){
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
        cerrarModal();
        mostrarToastify("ELIMINADO");
        btnAR.innerHTML = "Aprobar o Reprobar";
        btnAR.className = "btn";
    })
}

async function actualizarDatos(){
    let resp = await fetch("https://62e2a74fb54fc209b87df028.mockapi.io/estudiantes");
    let data = await resp.json();
    sistema.listaEstudiantes = [...data].sort((a,b) => {return (a.primerApellido).localeCompare(b.primerApellido)});
    cargarEstudianteACombo();
    mostrarPorcentaje();
    mostrarEstudiantesEnLista();  
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
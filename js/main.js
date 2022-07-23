const inicioSesion = []; // [usuario, contraseña, estado], estado = cuenta iniciada

function crearCuenta(){
    let form = document.getElementById("formCrearAbrirCuenta");
    let validarCuentaExistente = (sistema.validarCuentaExistente(document.getElementById("emailCrearIniciarCuenta").value) === undefined ) ? true : false ;

    if(validarCuentaExistente && form.reportValidity()){
        let email = document.getElementById("emailCrearIniciarCuenta").value;
        let password = document.getElementById("passwordCrearIniciarCuenta").value;

        let profesor = new Profesor(email, password);
        sistema.agregarCuentaProfesor(profesor);
        cerrarModal();
    }else if(!validarCuentaExistente){
        console.log(!validarCuentaExistente)
        alert("La cuenta ya existe");
    }

}

function iniciarSesion(){
    let form = document.getElementById("formCrearAbrirCuenta");
    let email = document.getElementById("emailCrearIniciarCuenta").value;
    let password = document.getElementById("passwordCrearIniciarCuenta").value;
    let validacionInicio = (sistema.validarInicioSesion(email, password) != undefined ) ? true : false;
    if(form.reportValidity() && validacionInicio){
        inicioSesion.push(email, password, true)
        cerrarModal();
    }else if(!validacionInicio) {
        alert("Algo salio mal mi amigo");
    }

}

function ventanaInfo(tipo){
    modal.className = "modal";
    if(tipo == "ADVERTENCIAGRAVE"){

        modal.innerHTML = `
        <div class="modal-info modal-info-advertenciaGrave">
            <img src="../images/modal/advertencia_grave.png" alt="">
            <h2>Advertencia</h2>
            <p>Esta a punto de borrar un estudiante, presione <span>ENTER</span> para confirmar, o cualquier otra tecla para abortar.</p>
            <button id="btnConfirmBorrar" class="btn">Borrar</button>
            <button id="btnCerrarModal" class="btn btn-secundary">Cancelar</button>
        </div>`;

        document.getElementById("btnConfirmBorrar").onclick = () => {confirmarBorrado()};
        document.getElementById("btnCerrarModal").onclick = () => {cerrarModal()};

    }else if(tipo == "ADVERTENCIA"){

        modal.innerHTML = `
        <div class="modal-info modal-info-advertencia">
            <img src="../images/modal/advertencia.png" alt="">
            <h2>Advertencia</h2>
            <p>El estudiante ya esta inscripto!</p>
            <button id="btnCerrarModal" class="btn">Ok</button>
        </div>`;
        document.getElementById("btnCerrarModal").onclick = () => {cerrarModal()};

    }else if(tipo == "CUENTA"){

        modal.innerHTML = `
        <div class="modal-info modal-info-cuenta">
            <button id="btnCerrarModal"></button>
            <h2>Simulador</h2>
            <form action="" id="formCrearAbrirCuenta">
                <input type="email" placeholder="Email" id="emailCrearIniciarCuenta" required>
                <input type="password" placeholder="Contraseña" id="passwordCrearIniciarCuenta" required>
                <input type="button" value="Iniciar Sesion" class="btn" id="btnIniciarCuenta">
                <input type="button" value="Crear cuenta" class="btn btn-secundary-cuenta" id="btnCrearCuenta">
            </form>
        </div>`;
        document.getElementById("btnCerrarModal").onclick = () => {cerrarModal()};
        document.getElementById("btnCrearCuenta").onclick = ()=> {crearCuenta()};
        document.getElementById("btnIniciarCuenta").onclick = () => {iniciarSesion()};
    }
}

function cerrarModal(){
    modal.innerHTML = "";
    modal.className = "";
}

function sesionIniciada(inicioSesion){
    if(inicioSesion[2]){

    }else{
        
    }
}
const modal = document.getElementById("modal");

function ventanaInfo(tipo, dato){
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

        document.getElementById("btnConfirmBorrar").onclick = () => {confirmarBorrado(dato)};
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
    }else if(tipo == "ELIMINADO"){
        Toastify({
            text: "Estudiante eliminado",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "#f44336"
            }
        }).showToast();
    }
}
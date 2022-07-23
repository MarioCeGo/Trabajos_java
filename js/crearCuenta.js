const inicioSesion = []; // [usuario, contraseña, estado], estado = cuenta iniciada

function completarCuenta(){
    let primerNombre = document.getElementById("primerNombreProfesor").value;
    let segundoNombre = document.getElementById("primerNombreProfesor").value;
    let primerApellido = document.getElementById("primerNombreProfesor").value;
    let segundoApellido = document.getElementById("primerNombreProfesor").value;
    let email = document.getElementById("emailProfesor");
    email.innerHTML = inicioSesion[0];
    let password = document.getElementById("passwordProfesor");
    password.innerHTML = inicioSesion[1];
    let fechaNacimiento = document.getElementById("fechaNacimientoProfesor").value;
}
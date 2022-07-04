class Sistema{
    constructor(){
        this.listaEstudiantes = [];
        this.estudiantesAprobados = [];
        this.estudiantesReprobados = [];
    }
    agregarEstudiante(estudiante){
        this.listaEstudiantes.push(estudiante);
        this.estudiantesReprobados.push(estudiante);
    }
    mostrarEstudiantes(){
        console.log("--- LISTA DE ESTUDIANTES ---");
        let cont = 1;
        for(let elem of this.listaEstudiantes){
            console.log(cont + ") " + "\n Nombre: " + elem.nombre + "\n Apellido: " + elem.apellido + "\n Cedula: " + elem.cedula);
            cont ++;
        }
    }
    mostrarEstudiantesAprobados(){
        let cont = 1;
        console.log("--- ESTUDIANTES APROBADOS ---");
        if(this.estudiantesAprobados != 0){
            for(let elem of this.estudiantesAprobados){
                console.log(cont + ") " + "\n Nombre: " + elem.nombre + "\n Apellido: " + elem.apellido);
                cont ++;
            }
        }else{
            console.log("NINGUN ESTUDIANTE APROBO");
        }
    }
    mostrarEstudiantesReprobados(){
        let cont = 1;
        console.log("--- ESTUDIANTES REPROBADOS ---");
        if(this.estudiantesReprobados != 0){
            for(let elem of this.estudiantesReprobados){
                console.log(cont + ") " + "\n Nombre: " + elem.nombre + "\n Apellido: " + elem.apellido);
                cont ++;
            }
        }else{
            console.log("NINGUN ESTUDIANTE REPROBO");
        }
    }
    aprobarEstudiante(nombre, apellido){
        let aux = true;
        for(let elem of this.estudiantesReprobados){
            if(elem.nombre.toUpperCase() == nombre && elem.apellido.toUpperCase() == apellido){
                this.estudiantesAprobados.push(elem);
                this.estudiantesReprobados.splice(this.estudiantesReprobados.indexOf(elem), 1);
                aux = false;
                alert("El estudiante: " + elem.nombre + " " + elem.apellido + " aprobo el curso");
            }
        }
        if(aux){
            console.log("El estudiante no esta registrado, no se puede aprobar");
        }
    }
    reprobarEstudiante(nombre, apellido){
        let aux = true;
        for(let elem of this.estudiantesAprobados){
            if(elem.nombre.toUpperCase() == nombre && elem.apellido.toUpperCase() == apellido){
                this.estudiantesReprobados.push(elem);
                this.estudiantesAprobados.splice(this.estudiantesAprobados.indexOf(elem), 1);
                aux = false;
                alert("El estudiante: " + elem.nombre + " " + elem.apellido + " reprobo el curso");
            }
        }
        if(aux){
            console.log("El estudiante no esta registrado, no se puede reprobar");
        }
    }
    buscarEstudianteXApellido(apellido){
        return this.listaEstudiantes.filter((estudiante) => estudiante.apellido.toUpperCase().includes(apellido.toUpperCase()));
    }
    buscarEstudianteXCedula(cedula){
        return this.listaEstudiantes.find((estudiante) => estudiante.cedula === cedula);
    }
    porcentajeEstudiantesAprobados(){
        return Math.round(((this.estudiantesAprobados.length * 100) / this.listaEstudiantes.length));
    }
    porcentajeEstudiantesReprobados(){
        return Math.round(((this.estudiantesReprobados.length * 100) / this.listaEstudiantes.length));
    }
}
class Estudiante{
    constructor(nombre, apellido, cedula){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.id = sistema.listaEstudiantes.length; 
    }
}

const sistema = new Sistema();

function crearEstudiante(){
    let nombre = prompt("Ingrese nombre del estudiante");
    let apellido = prompt("Ingrese apellido del estudiante");
    let cedula = parseInt(prompt("Ingrese cedula del estudiante, sin puntos ni guion"));
    sistema.agregarEstudiante(new Estudiante(nombre, apellido, cedula));
}
function aprobarEstudiante(){
    // EA = Estudiante Aprobado
    let nombreEA = prompt("Ingrese el nombre del estudiante aprobado").toUpperCase();
    let apellidoEA = prompt("Ingrese el apellido del estudiante aprobado").toUpperCase();
    sistema.aprobarEstudiante(nombreEA, apellidoEA);
}
function reprobarEstudiante(){
    // ER = Estudiante Reprobado
    let nombreER = prompt("Ingrese el nombre del estudiante reprobado").toUpperCase();
    let apellidoER = prompt("Ingrese el apellido del estudiante reprobado").toUpperCase();
    sistema.reprobarEstudiante(nombreER, apellidoER);
}

console.log("INICIO \n A. Inscribir estudiante \n B. Aprobar estudiante \n C. Reprobar estudiante \n D. Mostrar todos los estudiantes inscripto \n E. Mostrar estudiante aprobados \n F. Mostrar estudiantes reprobado \n G. Buscar estudiantes por apellidos \n H. Comprobar que el estudiante este inscripto/a \n I. Porcentaje de estudiantes aprobados \n J. Porcentaje de estudiantes reprobados \n K. Limpiar consola \n ESC. Salir");
let option = prompt("Eliga una opcion").toUpperCase();

while(option != "ESC"){
    switch(option){
        case "A":
            crearEstudiante();
            option = "HOME";
            break;
        case "B":
            aprobarEstudiante();
            option = "HOME";
            break;
        case "C":
            reprobarEstudiante();
            option = "HOME";
            break;
        case "D":
            sistema.mostrarEstudiantes();
            option = "HOME";
            break;
        case "E":
            sistema.mostrarEstudiantesAprobados();
            option = "HOME";
            break;
        case "F":
            sistema.mostrarEstudiantesReprobados();
            option = "HOME";
            break;
        case "G":
            let apellido = prompt("Ingrese el apellido del estudiante a buscar");
            if(sistema.buscarEstudianteXApellido(apellido)[0] === undefined){
                console.log("No se encontraron estudiantes con ese apellido");
            }else{
                console.log("--- ESTUDIANTES ENCONTRADOS ---");
                for(let elem of sistema.buscarEstudianteXApellido(apellido)){
                    console.log(elem.nombre + " " + elem.apellido );
                }
            }
            option = "HOME";
            break;
        case "H":
            let cedula = parseInt(prompt("Ingrese cedula del estudiante a buscar sin punto ni guion"));
            if(sistema.buscarEstudianteXCedula(cedula) === undefined){
                console.log("Estudiante no esa inscripto/a");
            }else{
                console.log("Estudiante encontrado/a")
                console.log(sistema.buscarEstudianteXCedula(cedula).nombre + " " + sistema.buscarEstudianteXCedula(cedula).apellido );
            }
            option = "HOME";   
            break;
        case "I":
            if(sistema.porcentajeEstudiantesAprobados() == 0){
                console.log("Ningun estudiante aprobo");
            }else{
                console.log("El " + sistema.porcentajeEstudiantesAprobados() + "% de los estudiante aprobo");
            }
            option = "HOME";
            break;
        case "J":
            if(sistema.porcentajeEstudiantesReprobados() == 0){
                console.log("Ningun estudiante reprobo");
            }else{
                console.log("El " + sistema.porcentajeEstudiantesReprobados() + "% de los estudiante reprobo");
            }
            option = "HOME";
            break;
        case "K":
            console.clear();
            console.log("INICIO \n A. Inscribir estudiante \n B. Aprobar estudiante \n C. Reprobar estudiante \n D. Mostrar todos los estudiantes inscripto \n E. Mostrar estudiante aprobados \n F. Mostrar estudiantes reprobado \n G. Buscar estudiantes por apellidos \n H. Comprobar que el estudiante este inscripto/a \n I. Porcentaje de estudiantes aprobados \n J. Porcentaje de estudiantes reprobados \n K. Limpiar consola \n ESC. Salir");
            option = "HOME";
            break;
        case "HOME":
            option = prompt("Eliga una opcion").toUpperCase();
            break;
    }
}
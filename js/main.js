class Sistema{
    constructor(){
        this.listaEstudiantes = [];
    }
    agregarEstudiante(estudiante){
        this.listaEstudiantes.push(estudiante)
    }
    mostrarEstudiantes(){
        console.log("--- LISTA DE ESTUDIANTES ---");
        let cont = 1;
        for(let elem of this.listaEstudiantes){
            console.log(cont + ") " + elem.nombre + " " + elem.apellido);
            cont ++;
        }
    }
    mostrarEstudiantesAprobados(){
        let cont = 1;
        console.log("--- ESTUDIANTES APROBADOS ---");
        let aux = true;
        for(let elem of this.listaEstudiantes){
            if(elem.aprobado){
                console.log(cont + ") " + elem.nombre + " " + elem.apellido);
                cont ++;
                aux = false;
            }
        }
        if(aux){
            console.log("NINGUN ESTUDIANTE APROBO");
        }
    }
    mostrarEstudiantesReprobados(){
        let cont = 1;
        let aux = true;
        console.log("--- ESTUDIANTES REPROBADOS ---");
        for(let elem of this.listaEstudiantes){
            if(!elem.aprobado){
                console.log(cont + ") " + elem.nombre + " " + elem.apellido);
                cont ++;
                aux = false;
            }
        }
        if(aux){
            console.log("NINGUN ESTUDIANTE REPROBO");
        }
    }
    aprobarEstudiante(nombre, apellido){
        let aux = true;
        for(let elem of this.listaEstudiantes){
            if(elem.nombre.toUpperCase() == nombre && elem.apellido.toUpperCase() == apellido){
                elem.aprobar();
                aux = false;
                alert("El estudiante: " + elem.nombre + " " + elem.apellido + " Aprobo el curso");
            }
        }
        if(aux){
            console.log("El estudiante no esta registrado, no se puede aprobar");
        }
    }
    reprobarEstudiante(nombre, apellido){
        let aux = true;
        for(let elem of this.listaEstudiantes){
            if(elem.nombre.toUpperCase() == nombre && elem.apellido.toUpperCase() == apellido){
                elem.reprobar();
                aux = false;
                alert("El estudiante: " + elem.nombre + " " + elem.apellido + " Reprobo el curso");
            }
        }
        if(aux){
            console.log("El estudiante no esta registrado, no se puede reprobar");
        }
    }
}
class Estudiante{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.aprobado = false;
    }
    aprobar(){
        this.aprobado = true;
    }
    reprobar(){
        this.aprobado = false;
    }
}

// Inicio el sistema 
const sistema = new Sistema();

// Funciones de crear, aprobar y reprobar estudiante

function crearEstudiante(){
    let nombre = prompt("Ingrese nombre del estudiante");
    let apellido = prompt("Ingrese apellido del estudiante");
    sistema.agregarEstudiante(new Estudiante(nombre, apellido));
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

// Comienzo del simulador

console.log("INICIO \n A. Inscribir estudiante \n B. Aprobar estudiante \n C. Reprobar estudiante \n D. Mostrar todos los estudiantes inscripto \n E. Mostrar estudiante aprobados \n F. Mostrar estudiantes reprobado \n G. Limpiar consola \n ESC. Salir");
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
            console.clear();
            console.log("INICIO \n A. Inscribir estudiante \n B. Aprobar estudiante \n C. Reprobar estudiante \n D. Mostrar todos los estudiantes inscripto \n E. Mostrar estudiante aprobados \n F. Mostrar estudiantes reprobado \n G. Limpiar consola \n ESC. Salir")
            option = "HOME";
            break;
        case "HOME":
            option = prompt("Eliga una opcion").toUpperCase();
            break;
    }
}
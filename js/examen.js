function agregarPregunta(){
    let pregunta;
    let opcion1;
    let opcion2;
    let opcion3;
    let opcion4;
    let form;
    let aux = `<p class="pregunta">${pregunta}</p>
    <ul>
        <li>${opcion1}</li>
        <li>${opcion2}</li>
        <li>${opcion3}</li>
        <li>${opcion4}</li>
    </ul>
    <input type="text" id="respueta" required maxlength="1">`
}
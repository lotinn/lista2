let botaoadiconar = document.getElementById("adicionar");
let containertarefa = document.getElementById("containertarefa");
let campoinput = document.getElementById("camporesultado")
let botaoterminar = document.getElementById("terminar");
let botaoapagar = document.getElementById("apagar");
let tarefacompleta = document.getElementById("containertarefacompleta")


botaoadiconar.addEventListener("click", function () {
    let paragrafo = document.createElement("p");
    paragrafo.classList.add('paragrafoestilo');       
    paragrafo.innerText = campoinput.value;
    containertarefa.appendChild(paragrafo);
    campoinput.value = "";
    campoinput.focus()

    paragrafo.addEventListener("click", function () {
        containertarefa.removeChild(paragrafo);
        tarefacompleta.appendChild(paragrafo);   //adiconar paragrafo quando um item vai pra lista
        campoinput.focus();
    })
    botaoterminar.addEventListener("click", function () {
        containertarefa.removeChild(paragrafo);     //terminar todas as tarefas
        tarefacompleta.appendChild(paragrafo);
        campoinput.focus();
    })
    botaoapagar.addEventListener("click", function () {
        tarefacompleta.removeChild(paragrafo);  //apagar as tarefas prontas
        campoinput.focus();
    })

})

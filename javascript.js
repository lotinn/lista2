// Seleção de elementos do DOM
let botaoadiconar = document.getElementById("adicionar");
let containertarefa = document.getElementById("containertarefa");
let campoinput = document.getElementById("camporesultado");
let botaoterminar = document.getElementById("terminar");
let botaoapagar = document.getElementById("apagar");
let tarefacompleta = document.getElementById("containertarefacompleta");

// Função para adicionar uma nova tarefa
function adicionarTarefa(paragrafo) {
    // Adiciona a classe de estilo ao parágrafo
    paragrafo.classList.add('paragrafoestilo');
    // Adiciona o parágrafo ao container de tarefas
    containertarefa.appendChild(paragrafo);

    // Cria um botão "Pronta" ao invés de "Terminar"
    let botaoPronta = document.createElement("button");
    botaoPronta.innerText = "Pronta";
    botaoPronta.addEventListener("click", function () {
        // Move o parágrafo para o container de tarefas concluídas
        containertarefa.removeChild(paragrafo);
        tarefacompleta.appendChild(paragrafo);
        // Esconde o botão "Pronta"
        botaoPronta.style.display = "none";
        // Coloca o foco no campo de entrada
        campoinput.focus();
    });

    // Adiciona o botão "Pronta" ao lado do parágrafo
    containertarefa.appendChild(paragrafo);
    containertarefa.appendChild(botaoPronta);

    // Limpa o campo de entrada e coloca o foco novamente
    campoinput.value = "";
    campoinput.focus();
}

// Adiciona uma nova tarefa quando a tecla Enter é pressionada no campo de entrada
campoinput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Cria um novo parágrafo
        let paragrafo = document.createElement("p");
        paragrafo.innerText = campoinput.value;
        // Chama a função para adicionar a tarefa
        adicionarTarefa(paragrafo);
    }
});

// Adiciona uma nova tarefa quando o botão "Adicionar" é clicado
botaoadiconar.addEventListener("click", function () {
    // Cria um novo parágrafo
    let paragrafo = document.createElement("p");
    paragrafo.innerText = campoinput.value;
    // Chama a função para adicionar a tarefa
    adicionarTarefa(paragrafo);
});

// Move todas as tarefas para o container de tarefas concluídas
botaoterminar.addEventListener("click", function () {
    // Obtém todos os parágrafos dentro do container de tarefas
    let paragrafos = Array.from(containertarefa.getElementsByTagName("p"));
    // Para cada parágrafo, move para o container de tarefas concluídas e esconde o botão "Pronta"
    paragrafos.forEach(paragrafo => {
        let botaoPronta = paragrafo.nextElementSibling;
        containertarefa.removeChild(paragrafo);
        tarefacompleta.appendChild(paragrafo);
        if (botaoPronta) {
            botaoPronta.style.display = "none";
        }
    });
    // Coloca o foco no campo de entrada
    campoinput.focus();
});

// Apaga todas as tarefas do container de tarefas concluídas
botaoapagar.addEventListener("click", function () {
    while (tarefacompleta.firstChild) {
        tarefacompleta.removeChild(tarefacompleta.firstChild);
    }
    // Coloca o foco no campo de entrada
    campoinput.focus();
});

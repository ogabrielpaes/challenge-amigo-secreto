let amigos = [];

function adicionarAmigo() {
        let inputNome = document.getElementById("amigo"); // Captura o campo de entrada
        let nome = inputNome.value.trim(); // Obtém o valor e remove espaços extras
    
        if (nome === "") {
            alert("Por favor, insira um nome."); // Exibe mensagem de erro se o campo estiver vazio
            return;
        }
    
        amigos.push(nome); // Adiciona o nome ao array
        console.log("Lista de Amigos:", amigos); // Exibe a lista no console para conferência
    
        inputNome.value = ""; // Limpa o campo de entrada
    }

    function atualizarListaAmigos() {
        let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
        lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
        for (let amigo of amigos) {
            let li = document.createElement("li"); // Cria um novo elemento <li>
            li.textContent = amigo; // Define o nome do amigo como texto do <li>
            lista.appendChild(li); // Adiciona o <li> à lista
        }
    }
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome do amigo sorteado

    let resultado = document.getElementById("resultado"); // Obtém o elemento onde será exibido o resultado
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Exibe o nome sorteado na tela
}

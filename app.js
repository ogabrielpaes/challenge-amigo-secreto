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
    
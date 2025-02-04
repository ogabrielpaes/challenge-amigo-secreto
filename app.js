let amigos = [];

function adicionarAmigo() {
        let inputNome = document.getElementById("amigo");
        let nome = inputNome.value.trim();
    
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }
    
        amigos.push(nome);
        console.log("Lista de Amigos:", amigos);
    
        inputNome.value = "";
        atualizarListaAmigos()
    }

    function atualizarListaAmigos() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
            
        for (let amigo of amigos) {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        }
    }
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

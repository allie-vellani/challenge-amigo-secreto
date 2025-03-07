let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        console.log(amigos);
        input.value = '';

    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    lista.appendChild(li);
    } else {
        alert('Digite um nome válido');
    }
}

function sortearAmigo() {
    if (amigos.length <2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const sorteio = [];
    const amigosDisponiveis = [...amigos];

    amigos.forEach((amigo) => {
        let index;
        let escolhido;

        do {
            index = Math.floor(Math.random() * amigosDisponiveis.length);
            escolhido = amigosDisponiveis[index];
        } while (escolhido === amigo);

        sorteio.push({ amigo, amigoSecreto: escolhido });
        amigosDisponiveis.splice(index, 1);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    sorteio .forEach((par) => {
        const li = document.createElement('li');
        li.textContent = `${par.amigo} tirou ${par.amigoSecreto}`;
        resultado.appendChild(li);
    });
}
    

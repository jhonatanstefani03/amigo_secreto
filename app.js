//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosSecretos = [];



function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == amigosSecretos){
        alert('nome já cadastrado');
        return adicionarAmigo()
    }
    else{
    amigosSecretos.push(nome);
    }

    console.log('clicando');
    console.log(amigosSecretos)
}


function sortearAmigo(){
    let indice = Math.floor(Math.random() * amigosSecretos.length);
    let sorteado = amigosSecretos[indice];
    console.log('Amigo sorteado:', sorteado);

    document.getElementById('resultado').textContent =
    ` O amigo sorteado é: ${sorteado}`;
}
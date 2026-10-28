const btnAtualizar = document.getElementById('btnAtualizar');
const inputNome = document.getElementById('inputNome');

if (btnAtualizar) {
    btnAtualizar.addEventListener('click', function() {
        if(inputNome.value.trim() !== "") {
            alert("Oi, " + inputNome.value + "Bem vindo ao MercadoLivro");
        } else {
            alert("Digite seu nome");
        }
    });
}

const btnGerarPrevia = document.getElementById('btnGerarPrevia');
const containerPrevia = document.getElementById('containerPrevia');

if (btnGerarPrevia) {
    btnGerarPrevia.addEventListener('click', function() {
        if (containerPrevia.querySelector('p') === null) {
            const novaMensagem = document.createElement('p');
            novaMensagem.textContent = "Prévia gerada com sucesso, aproveite o seu e book de amostra";
            novaMensagem.style.color = "green";
            containerPrevia.appendChild(novaMensagem);
        } else {
            alert('A prévia já foi gerada anteriormente');
        }
    });
}
const btnSobre = document.getElementById('btn-sobre');
const descSobre = document.getElementById('desc-sobre');

btnSobre.addEventListener('click', function(event) {
    event.preventDefault();
    descSobre.classList.toggle('ativo');
});

const btnFale = document.getElementById('btn-fale');
const descFale = document.getElementById('desc-fale');

btnFale.addEventListener('click', function(event) {
    event.preventDefault();
    descFale.classList.toggle('ativo');
});

const btnFaq = document.getElementById('btn-faq');
const descFaq = document.getElementById('desc-faq');

btnFaq.addEventListener('click', function(event) {
    event.preventDefault();
    descFaq.classList.toggle('ativo');
});

const perguntas = document.querySelectorAll('.btn-pergunta');

perguntas.forEach(function(pergunta) {
    pergunta.addEventListener('click', function(event) {
        event.preventDefault();
        const resposta = this.nextElementSibling;
        resposta.classList.toggle('ativo');
    });
});


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

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



// Menu hamburguer
const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
});

// Footer
const btnSobre = document.getElementById("btn-sobre");
const descSobre = document.getElementById("desc-sobre");

btnSobre.addEventListener("click", (event) => {
    event.preventDefault();
    descSobre.classList.toggle("ativo");
});

const btnFale = document.getElementById("btn-fale");
const descFale = document.getElementById("desc-fale");

btnFale.addEventListener("click", (event) => {
    event.preventDefault();
    descFale.classList.toggle("ativo");
});

const btnFaq = document.getElementById("btn-faq");
const descFaq = document.getElementById("desc-faq");

btnFaq.addEventListener("click", (event) => {
    event.preventDefault();
    descFaq.classList.toggle("ativo");
});

const perguntas = document.querySelectorAll(".btn-pergunta");

perguntas.forEach((pergunta) => {

    pergunta.addEventListener("click", (event) => {

        event.preventDefault();

        const resposta =
        pergunta.nextElementSibling;

        resposta.classList.toggle("ativo");
    });
});

// Tema escuro
const darkMode = document.getElementById("dark");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("dark-theme");
    darkMode.checked = true;
}

// Alterna entre tema claro e escuro
darkMode.addEventListener("change", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
});

// Coloca o ano certo
const ano = document.getElementById("ano");

if (ano) {

    ano.textContent =
    new Date().getFullYear();
}

// Carrinho
let quantidade = Number(localStorage.getItem("quantidadeCarrinho")) || 0;

const contadorCarrinho = document.getElementById("contador-carrinho");

const btnRemoverItem = document.getElementById("btn-remover-item");

const botoesComprar = document.querySelectorAll(".btn-comprar");

function atualizarCarrinho() {

    contadorCarrinho.textContent = quantidade;

    localStorage.setItem("quantidadeCarrinho", quantidade);

    if (quantidade > 0) {
        btnRemoverItem.style.display = "inline-block";
    } else {
        btnRemoverItem.style.display = "none";
    }
}

botoesComprar.forEach((botao) => {
    botao.addEventListener("click", () => {
        quantidade++;

        atualizarCarrinho();
    });
});

btnRemoverItem.addEventListener("click", () => {

    if (quantidade > 0) {
        quantidade--;

        atualizarCarrinho();
    }
});

atualizarCarrinho();
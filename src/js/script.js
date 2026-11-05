const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
});

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

const btnAtualizar = document.getElementById("btnAtualizar");

const inputNome = document.getElementById("inputNome");

btnAtualizar.addEventListener("click", () => {

    const nome =
    inputNome.value.trim();

    if (nome !== "") {
        alert(
            `Olá, ${nome}! Bem-vindo ao Mercado Livro!`
        );

        localStorage.setItem("nomeUsuario", nome);

    } else {
        alert("Digite seu nome.");
    }
});

const btnGerarPrevia = document.getElementById("btnGerarPrevia");

const containerPrevia = document.getElementById("containerPrevia");

btnGerarPrevia.addEventListener("click", () => {

    if (!containerPrevia.querySelector("p")) {

        const mensagem =
        document.createElement("p");

        mensagem.textContent =
        "Prévia gerada com sucesso! Aproveite seu e-book de amostra.";

        mensagem.style.color = "green";

        containerPrevia.appendChild(mensagem);

    } else {
        alert(
            "A prévia já foi gerada anteriormente."
        );
    }
});

const darkMode = document.getElementById("dark");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {

    document.body.classList.add("dark-theme");
    darkMode.checked = true;

}

darkMode.addEventListener("change", () => {

    document.body.classList.toggle("dark-theme");

    if (
        document.body.classList.contains(
            "dark-theme"
        )
    ) {
        localStorage.setItem(
            "tema",
            "escuro"
        );
    } else {
        localStorage.setItem(
            "tema",
            "claro"
        );
    }
});

const ano =
document.getElementById("ano");

if (ano) {

    ano.textContent =
    new Date().getFullYear();
}

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const contadorCarrinho =
document.getElementById(
    "contador-carrinho"
);

const listaCarrinho =
document.getElementById(
    "lista-carrinho"
);

const botoesComprar =
document.querySelectorAll(
    ".btn-comprar"
);

botoesComprar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const card =
        botao.closest(".card");

        const nomeLivro =
        card.querySelector("h4")
            .textContent;

        carrinho.push(nomeLivro);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        atualizarCarrinho();

        alert(
            `${nomeLivro} foi adicionado ao carrinho!`
        );

    });

});

function atualizarCarrinho() {

    if (contadorCarrinho) {

        contadorCarrinho.textContent =
        carrinho.length;

    }

    if (listaCarrinho) {

        listaCarrinho.innerHTML = "";

        carrinho.forEach((livro, indice) => {

            const li =
            document.createElement("li");

            li.innerHTML = `
                ${livro}
                <button
                onclick="removerItem(${indice})">
                ❌
                </button>
            `;

            listaCarrinho.appendChild(li);

        });
    }
}

function removerItem(indice) {

    carrinho.splice(indice, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}

function limparCarrinho() {

    carrinho = [];

    localStorage.removeItem(
        "carrinho"
    );

    atualizarCarrinho();
}

atualizarCarrinho();
const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
});

function toggleElemento(botaoId, elementoId) {

    const botao = document.getElementById(botaoId);
    const elemento = document.getElementById(elementoId);

    botao.addEventListener("click", (e) => {
        e.preventDefault();
        elemento.classList.toggle("ativo");
    });
}

toggleElemento("btn-sobre", "desc-sobre");
toggleElemento("btn-fale", "desc-fale");
toggleElemento("btn-faq", "desc-faq");

document.querySelectorAll(".btn-pergunta").forEach((pergunta) => {
    pergunta.addEventListener("click", (e) => {
        e.preventDefault();
        pergunta.nextElementSibling.classList.toggle("ativo");
    });
});

const btnAtualizar = document.getElementById("btnAtualizar");

const inputNome = document.getElementById("inputNome");

btnAtualizar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    if(nome){
        alert(`Olá, ${nome}! Bem-vindo ao Mercado Livro.`);
    }else{
        alert("Digite seu nome.");
    }
});

const btnGerarPrevia = document.getElementById("btnGerarPrevia");

const containerPrevia = document.getElementById("containerPrevia");
btnGerarPrevia.addEventListener("click", () => {
    if(!containerPrevia.querySelector("p")){
        const p = document.createElement("p");
        p.textContent = "Prévia gerada com sucesso. Aproveite seu e-book de amostra.";
        p.style.color = "green";
        containerPrevia.appendChild(p);
    }else{
        alert("A prévia já foi gerada.");
    }
});

document.querySelectorAll(".btn-comprar").forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Livro adicionado ao carrinho!");
    });
});

const darkMode = document.getElementById("dark");
darkMode.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
});

document.getElementById("ano").textContent =
new Date().getFullYear();
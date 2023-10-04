const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao,indice) => {
    botao.addEventListener("click" , () => {
        desselecionarBotao();
         desselecionadoPersonagem();

         personagens[indice].classList.add("selecionado");
         botao.classList.add("selecionado");
    })
})

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function desselecionadoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');
}

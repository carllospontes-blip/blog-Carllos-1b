const botoes = document.querySelectorAll("button");
botoes.forEach(function(botao) {
botao.addEventListener("click", botaoClicado);

function botaoClicado() {
console.log("fui clicado");
let texto = botao.querySelector("span");
texto.textContent++;
}
});

//                 ##legendas:
//querySelector: seleciona o primeiro elemento que corresponde ao seletor CSS especificado.
//addEventListener: adiciona um evento de click, permitindo que você execute uma função quando o evento ocorre.
//textContent: modifica o conteúdo de texto de um elemento HTML.
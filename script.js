//Cria um constante que seleciona o botao no html
const botao = document.querySelector("button");
//Cria um evento de click e chama a função botaoClicado
botao.addEventListener("click",botaoClicado);

//Cria a função que fará com que o texto do numero zero some + 1 a cada click
function botaoClicado(){
    let texto= botao.querySelector("span");
    texto.textContent++;
}

//                 ##legendas:
//querySelector: seleciona o primeiro elemento que corresponde ao seletor CSS especificado.
//addEventListener: adiciona um evento de click, permitindo que você execute uma função quando o evento ocorre.
//textContent: modifica o conteúdo de texto de um elemento HTML.
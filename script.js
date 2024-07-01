let modClaro = "Modo Claro";
let modEscuro = "Modo Escuro";
function claro(el){
    document.getElementsByTagName("body")[0].classList.add("claro");
    el.setAttribute("onclick", "escuro(this)");
    el.innerHTML = modEscuro;
    modAtual = 1;
}
function escuro(el){
    document.getElementsByTagName("body")[0].classList.remove("claro");
    el.setAttribute("onclick", "claro(this)");
    el.innerHTML = modClaro;
    modAtual = 0;
}
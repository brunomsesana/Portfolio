let modAtual = 0;
function claro(el){
    document.getElementsByTagName("body")[0].classList.add("claro");
    el.setAttribute("onclick", "escuro(this)");
    document.getElementById("bgMod").style.fill = "#38b6ff";
    let els1 = document.getElementsByClassName("light");
    let els = document.getElementsByClassName("dark");
    for(let i = 0; i < els.length; i++){
        els[i].style.opacity = 0;
        els[i].style.translate = "40px";
    }
    for(let i = 0; i < els1.length; i++){
        els1[i].style.opacity = 1
        els1[i].style.translate = "0px";
    }
    modAtual = 1;
}
function escuro(el){
    document.getElementsByTagName("body")[0].classList.remove("claro");
    el.setAttribute("onclick", "claro(this)");
    document.getElementById("bgMod").style.fill = "#737373";
    let els = document.getElementsByClassName("light");
    let els1 = document.getElementsByClassName("dark");
    for(let i = 0; i < els.length; i++){
        els[i].style.opacity = 0;
        els[i].style.translate = "-40px";
    }
    for(let i = 0; i < els1.length; i++){
        els1[i].style.opacity = 1;
        els1[i].style.translate = "0px";
    }
    modAtual = 0;
}
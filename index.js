 var Direita = window.document.getElementById("direita");
 var Leonardo = window.document.getElementById("leonardo");
 var Samanta = window.document.getElementById("samanta");
 var Bruna = window.document.getElementById("bruna");
 var Esquerda = window.document.getElementById("esquerda");
 function RolarDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    Direita.style = "display: none"
    Esquerda.style = "display: flex"

}

 function RolarEsquerda(){
    Bruna.style = "display: none"
    Leonardo.style = "display: flex"
     Esquerda.style = "display: none"
    Direita.style = "display: flex"
 }
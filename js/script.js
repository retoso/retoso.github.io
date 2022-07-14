/*enviar nome*/

function enviarNome(){
   var nomeInserido=document.getElementById("nome").value
   document.getElementById("texto_area").innerText=("O seu nome e " + nomeInserido)
}

/*Par ou Impar*/

function enviarNumero(){
   var numeroInserido=document.getElementById("numero").value
   if (numeroInserido % 2 == 0){
      document.getElementById("texto_area").innerText=("  O nnúmero " +  numeroInserido + "  e par!")
      } else {document.getElementById("texto_area").innerText=("  O número " +  numeroInserido + "  e impar!")}
}


/*Gerador numeros aPar ou Impar*/








   function faixaetaria(){
    var faixaetaria=document.getElementById("idade").value
    if (faixaetaria >= 18){
       var maiormenor = "Voce e de maior"
    } else 
       maiormenor = "Voce e menor"
    document.getElementById("texto_area").innerText=(maiormenor)
}

function calculate(){
   var peso=document.getElementById("valorPeso").value
   var excedeu = peso - 50
   var multa = excedeu * 4.0
   if (peso > 50) { 
   document.getElementById("texto_area").innerText=("Voce excedeu o peso maximo estabelecido em " + excedeu + " Portanto a multa sera de R$ " + multa)
    }else 
    document.getElementById("texto_area").innerText=("Parabens!!! Voce esta dentro das normas")
}


function clear(){
   var btn = document.querySelector("#refresh");
   btn.addEventListener("click", function() {    
    location.reload();
});
   
}
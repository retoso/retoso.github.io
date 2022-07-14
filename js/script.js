/*enviar nome*/

function enviarNome(){
   var nomeInserido=document.getElementById("nome").value
   document.getElementById("texto_area").innerText=("O seu nome é " + nomeInserido)
}

/*Par ou Impar*/

function enviarNumero(){
   var numeroInserido=document.getElementById("numero").value;
   if (numeroInserido % 2 == 0){
      document.getElementById("texto_area").innerText=("  O número " +  numeroInserido + "  é par!")
      } else {document.getElementById("texto_area").innerText=("  O número " +  numeroInserido + "  é impar!")};
}


/*Gerador números aleatórios*/

function geradorNumero(){
   
   var min=document.getElementById("minimo").value;
   var max=document.getElementById("maximo").value;
   var qtd=document.getElementById("quantidade").value;
   var resultado = []
   var arr = []
   
   function geradorNumero(min, max) { 
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
   } 
   
   for (let i = 1; i <= qtd; i++) {
     if (resultado.length == qtd){ 

     } else
       arr.push(geradorNumero(min, max))
       resultado = [...new Set(arr)]
       resultado.sort()
       }
       document.getElementById("texto_area").innerText=("  Os números são " + resultado)};

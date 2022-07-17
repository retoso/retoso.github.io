/*enviar nome*/

function enviarNome() {
   var nomeInserido = document.getElementById("nome").value
   document.getElementById("texto_area").innerText = ("O seu nome é " + nomeInserido)
}

/*Par ou Impar*/

function enviarNumero() {
   var numeroInserido = document.getElementById("numero").value;
   if (numeroInserido % 2 == 0) {
      document.getElementById("texto_area").innerText = ("  O número " + numeroInserido + "  é par!")
   } else { document.getElementById("texto_area").innerText = ("  O número " + numeroInserido + "  é impar!") };
}


/*Gerador números aleatórios*/

function geradorNumero() {

   var min = document.getElementById("minimo").value;
   var max = document.getElementById("maximo").value;
   var qtd = document.getElementById("quantidade").value;
   var resultado = []
   var arr = []

   function geradorNumero(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   for (let i = 1; i <= qtd; i++) {
      if (resultado.length == qtd) {

      } else
         arr.push(geradorNumero(min, max))
      resultado = [...new Set(arr)]
      resultado.sort()
   }
   document.getElementById("texto_area").innerText = ("  Os números são " + resultado)
};


/*maior de idade*/
function idade() {
   var maiorMenor = document.getElementById("txtIdade").value
   if (maiorMenor >= 18 && maiorMenor <= 65) {
      document.getElementById("texto_area").innerText = ("Voce e maior de idade!!")
   } else if (maiorMenor > 65 && maiorMenor < 100) {
      document.getElementById("texto_area").innerText = ("Além de ser maior de idade, você ja faz parte do grupo da terceira idade!!")
   } else if (maiorMenor > 100) {
      document.getElementById("texto_area").innerText = ("Será mesmo que você tem " + maiorMenor + " de idade!!!")
   } else if (maiorMenor === "") {
      document.getElementById("texto_area").innerText = ("Pode informar sua idade, será um segredo nosso!!")
   } else
      document.getElementById("texto_area").innerText = ("Voce e menor de idade!!")

}

/*Gerador de números aleatórios para Mega-Sena*/

function geradorDaMega() {
   var qtdJogos = document.getElementById("quantidade").value;
   var jogo = []
   function jogofinal() {
      for (let i = 1; i <= 6; i++) {
         jogo.push(Math.floor(Math.random() * 60) + 1)
         jogo.sort()
      }
      var tmp = [];
      for (var i = 0; i < jogo.length; i++) {
         if (tmp.indexOf(jogo[i]) == -1) {
             tmp.push(jogo[i]);
            }
         }
         return tmp;
      }

for (let i = 1; i < qtdJogos + 1; i++) {
   if (jogofinal(jogo).length <= 5) {
      i--
      var jogo = []
   } else
   document.getElementById("texto_area").innerText = ("Jogo número " + i + " - " jogo)
   var jogo = []
}
};

console.clear();
console.log();

const prompt = require("prompt-sync")();
//// FUNÇÕES
function autorizaVoto(anoNascimento) {
  idade = 2022 - anoNascimento;
  if (idade >= 18) {
    console.log();
    console.log("Seu voto nessa eleição é obrigatório!");
  } else if (idade == 16 || idade == 17) {
    console.log();
    console.log("Seu voto nessa eleição é opcional");

  } else if (idade < 15) {
    console.log();
    console.log("Você não pode votar ainda");
  }
}
function exibirResultados() {
  console.log(`
  Total de votos Matheus: ${eleitores.Matheus}
  Total de votos Giovanna: ${eleitores.Giovanna}
  Total de votos Carini: ${eleitores.Carini}
  Total de votos Nulos: ${eleitores.Nulo}
  Total de votos Brancos: ${eleitores.Branco}`)
console.log()
  if ((eleitores.Matheus > eleitores.Giovanna) & (eleitores.Matheus > eleitores.Carini) & (eleitores.Matheus > eleitores.Nulo) & (eleitores.Matheus > eleitores.Branco)) {
    console.log(`O eleitor Matheus teve ${eleitores.Matheus} votos e ganhou a eleição. `)
  } else if ((eleitores.Giovanna > eleitores.Matheus) & (eleitores.Giovanna > eleitores.Carini) & (eleitores.Giovanna > eleitores.Nulo) & (eleitores.Giovanna > eleitores.Branco)) {
    console.log(`A eleitora Giovanna teve ${eleitores.Giovanna} votos e ganhou a eleição. `)
  } else if ((eleitores.Carini > eleitores.Matheus) & (eleitores.Carini > eleitores.Giovanna) & (eleitores.Carini > eleitores.Nulo) & (eleitores.Carini > eleitores.Branco)) {
    console.log(`A eleitora Carini teve ${eleitores.Carini} votos e ganhou a eleição. `)
  } else if ((eleitores.Matheus == eleitores.Carini) & (eleitores.Giovanna == eleitores.Matheus) & (eleitores.Giovanna == eleitores.Carini)) {
    console.log('Todos os eleitores tiveram a mesma quantidade de votos, por isso foi declarado um empate e será necessário uma segunda votação.')
  }
  }
/// AREA DE VOTOS (OBJETOS, ARRAYS e NOME DO ELEITOR)

var tiposdeVoto = [
  "[1] Matheus",
  "[2] Giovanna",
  "[3] Carini",
  "[4] Nulo",
  "[5] Branco",
];

const eleitores = new Object ();
  eleitores.Matheus = 0,
  eleitores.Giovanna = 0,
  eleitores.Carini = 0,
  eleitores.Nulo = 0,
  eleitores.Branco = 0,

 eleitores.votacao = function() {
 if (votar == 1) {
   this.Matheus = this.Matheus + 1
 } else if (votar == 2) {
   this.Giovanna = this.Giovanna + 1
 } else if (votar == 3) {
   this.Carini = this.Carini + 1
 } else if (votar == 4) {
   this.Nulo = this.Nulo + 1
 } else if (votar == 5) {
   this.Branco = this.Branco +1
 }
 
};
/// FIM DAS VARIAVEIS RELACIONADAS AOS VOTOS

var nome = prompt("Digite o seu nome completo: ");
var anoNascimento = prompt("Digita o ano do seu nascimento: ");
autorizaVoto(anoNascimento);

if (idade == 16 || idade == 17) {
  console.log();
  console.log(`Você quer votar? 
[1] Para votar
[2] Para não votar`);
  var votoOpcao = prompt("Qual a sua escolha? ");
  if (votoOpcao == 1) {
    do {
      console.log();
      console.log("Agora, escolha em quem quer votar: ");
      console.log();
      for (let i of tiposdeVoto) {
        console.log(i);
      }
      console.log();
      var votar = +prompt(
        "Digite o número referente ao candidato que quer votar: "
      );
      console.log();
      eleitores.votacao();
      var novoVoto = prompt(
        "Você quer votar em mais algum candidato? "
      ).toUpperCase()
    } while (novoVoto == 'SIM');
  }
  eleitores.votacao();
  console.log(eleitores.Carini)
}

if (idade >= 18) {
  do {
    console.log();
    console.log("Agora, escolha em quem quer votar: ");
    console.log();

    for (let i of tiposdeVoto) {
      console.log(i);
    }
    console.log();
    var votar = +prompt(
      "Digite o número referente ao candidato que quer votar: "
    );
    console.log();
    var novoVoto = prompt(
      "Você quer votar em mais algum candidato? ").toUpperCase()
      eleitores.votacao();
  } while (novoVoto == 'SIM');
  console.log();
}
console.log('Votos enviados com sucesso!')
console.log()
exibirResultados()
console.log()
console.log()



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
/// AREA DE VOTOS (OBJETOS, ARRAYS e NOME DO ELEITOR)

var tiposdeVoto = [
  "[77] Matheus",
  "[68] Giovanna",
  "[52] Carini",
  "[1] Nulo",
  "[0] Branco",
];

placardeVotacao = {
  Matheus: 0,
  Giovanna: 0,
  Carini: 0,
  Nulo: 0,
  Branco: 0,
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
      var novoVoto = prompt(
        "Você quer votar em mais algum candidato? "
      ).toUpperCase()
    } while (novoVoto == 'SIM');
  }
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
  } while (novoVoto == 'SIM');
  console.log();
}

/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso
e mostre uma mensagem na tela.
*/

const estudantes = [
  {
    nome: "João",
    nota1: 4,
    nota2: 8,
  },
  {
    nome: "Letícia",
    nota1: 10,
    nota2: 9,
  },
  {
    nome: "Diego",
    nota1: 8,
    nota2: 10,
  },
  {
    nome: "Julia",
    nota1: 5,
    nota2: 6,
  },
]

function calculaMedia (nota1, nota2) {
  return (nota1 + nota2) / 2 
}

for (let estudante of estudantes) {
  let media = calculaMedia(estudante.nota1, estudante.nota2)
  
  if (media >= 7) {
    alert(`A média do(a) aluno(a) ${estudante.nome} é ${media} \nParabéns ${estudante.nome}, você foi aprovado no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${estudante.nome} é ${media} \nNão foi dessa vez ${estudante.nome}, tente novamente!`)
  }
}


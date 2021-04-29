interface PessoaProtocolo<T = string, U = number> {
  nome: T
  sobrenome: T
  idade: U
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T
  sobrenome: T
  idade: U
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'antonio',
  sobrenome: 'silva',
  idade: 15,
}

const aluno2: PessoaProtocolo2<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 15,
}

const aluno3: PessoaProtocolo = {
  nome: 'maria',
  sobrenome: 'antonia',
  idade: 17,
}

console.log(aluno1, aluno2, aluno3)

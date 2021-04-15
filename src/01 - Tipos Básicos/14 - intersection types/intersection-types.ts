type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemAltura = { altura: number }
type Pessoa = TemNome & TemSobrenome & TemAltura

const outraPessoa: Pessoa = {
  altura: 1.5,
  nome: 'nome',
  sobrenome: 'sobrenome',
}

console.log(outraPessoa)

type AB = 'A' | 'B'
type AC = 'A' | 'C'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC // "A"

// type alias
type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const _pessoa: Pessoa = {
  idade: 10,
  nome: 'Robson',
  salario: 200_000, // 200000
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(_pessoa, 'Azul'))
console.log(_pessoa)

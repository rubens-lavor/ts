# type alias

Usamos tipos de objeto e tipos de união, escrevendo-os diretamente nas anotações de tipo. Isso é conveniente, mas **é comum querer usar o mesmo tipo mais de uma vez** e se referir a ele por um único nome.

Um `type alias` é exatamente isso - um nome para qualquer tipo. Abaixo é apresentado a sintaxe e alguns exemplos de `type alias`:

## Código desenvolvido para exemplificar:

~~~typescript
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

// usando os tipos
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

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

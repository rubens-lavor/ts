// Declaration merging
interface _Pessoa {
  nome: string
}

interface _Pessoa {
  readonly sobrenome: string
}

interface _Pessoa {
  readonly enderecos: readonly string[]
}

interface _Pessoa {
  readonly idade?: number
}

const _pessoa: _Pessoa = {
  nome: 'josé',
  sobrenome: 'luiz',
  enderecos: ['Av. Brasil'],
}

console.log(_pessoa)

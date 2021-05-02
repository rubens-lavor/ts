// Record
const objeto1: Record<string, string | number> = {
  nome: 'maria',
  sobrenome: 'elizabete',
  idade: 60,
}

console.log(objeto1)

type PessoaProtocol = {
  nome?: string
  sobrenome?: string
  idade?: number
}

// Required
type PessoaRequired = Required<PessoaProtocol>

// Partial
type PessoaPartial = Partial<PessoaRequired>

const objeto2: PessoaRequired = {
  nome: 'josé',
  sobrenome: 'silva',
  idade: 30,
}

const objeto3: PessoaPartial = {
  nome: 'josé',
  sobrenome: 'silva',
  idade: 30,
}

console.log(objeto2)
console.log(objeto3)

// Module node
export default 1

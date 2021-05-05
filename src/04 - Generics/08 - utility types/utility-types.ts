/* eslint-disable @typescript-eslint/no-unused-vars */
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

// Readonly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaReadeonly = Readonly<PessoaRequired>

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

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

// Extract e Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TipoExclude = Exclude<ABC, CDE>
type TipoExtract = Extract<ABC, CDE>

type AccountMongo = {
  _id: string
  nome: string
  idade: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

const accountMongo: AccountMongo = {
  _id: 'dwejoiedjiodedwepd',
  nome: 'luiz',
  idade: 30,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo
  return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log(accountApi)

// Module node
export default 1

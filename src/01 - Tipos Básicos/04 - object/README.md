# object

`object` é um tipo que representa o tipo não primitivo, isto é, qualquer coisa que não é `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, ou `undefined`.


## Código desenvolvido para exemplificar:

~~~typescript

const objetoA: {
  chaveA: string
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'valor A',
  chaveB: 'Valor B',
}

objetoA.chaveA = 'outro valor'
objetoA.chaveC = 'nova chave'

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

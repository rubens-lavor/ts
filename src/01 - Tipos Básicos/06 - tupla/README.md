# Tupla


Os tipos de tupla permitem expressar uma array com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos. Por exemplo, você pode querer representar um valor como um par de a `string` e um `number`

Ao acessar um elemento com um índice conhecido, o tipo correto é recuperado

O acesso a um elemento fora do conjunto de índices conhecidos falha com um erro


## Código desenvolvido para exemplificar:

~~~typescript

// Tupla
const dadosCliente: readonly [number, string] = [1, 'eu'] // tupla imutável devido ao readonly
const dadosCliente2: [number, string, string?] = [1, 'eu', 'sobrenome']

dadosCliente2[1] = 'nome'

console.log(dadosCliente)
console.log(dadosCliente2)

// readonly array
const array1: ReadonlyArray<string> = ['opção 1']
const array2: readonly string[] = ['opção 2']

console.log(array1)
console.log(array2)


~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

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

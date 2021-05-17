# Array

TypeScript, como JavaScript, permite que você trabalhe com array de valores. Os tipos de array podem ser escritos de duas maneiras:

* No primeiro, você usa o tipo dos elementos seguido por `[]` para denotar uma matriz desse tipo de elemento.

* A segunda maneira usa um tipo de array genérico `Array<elemType>`

## Código desenvolvido para exemplificar:

~~~typescript

// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatenaString(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase())
}

const result = multiplicaArgs(1, 2, 3)
const concatenacao = concatenaString('a', 'b', 'c')
const upper = toUpperCase('a', 'b', 'c')

console.log(result)
console.log(concatenacao)
console.log(upper)

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

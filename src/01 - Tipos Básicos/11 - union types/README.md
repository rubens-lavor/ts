# union types

A primeira maneira de combinar tipos que você pode ver é um `union types`. Um `union` é o tipo formado por dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Nos referimos a cada um desses tipos como membros do `union`.

## Código desenvolvido para exemplificar:

~~~typescript
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return `S{a}${b}`
}

console.log(add(10, 20))
console.log(add('10', '20'))
console.log(add(10, '20'))

~~~
---

Veja que o retorno da `function add()` pode ser um `number` ou  `string`, dependendo do tipo dos parâmetros.

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

# null e undefined

No TypeScript, ambos `undefined` e `null` realmente têm seus tipos nomeados `undefined` `null` respectivamente. Bem como `void`, eles não são extremamente úteis por conta própria

Por padrão, `undefined` e `null` são subtipos de todos os outros tipos. Isso significa que você pode atribuir `undefined` e `null` a algo como um `number`.

No entanto, ao usar a flag `--strictNullChecks`, `undefined` e `null` só podem ser atribuídos a `unknown`, `any` e seus respectivos tipos (sendo a única exceção que `undefined` também pode ser atribuído a `void`). Isso ajuda a evitar muitos erros comuns. Nos casos em que deseja passar um `string` ou `null` ou `undefined`, você pode usar o tipo de união `string | null | undefined`.

## Código desenvolvido para exemplificar:

~~~typescript

let x
if (typeof x === 'undefined') x = 20
console.log(x * 2)

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string
  lastName?: string
} {
  return {
    firstName,
    lastName,
  }
}

/* eslint-disable */
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x
  return null
}

const squareOfTwoNumber = squareOf(2)

if (squareOfTwoNumber === null) {
  console.log('conta inválida')
} else {
  console.log(squareOfTwoNumber * 100)
}



~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

# type assertions

Às vezes, você terá informações sobre o tipo de valor que o TypeScript não pode conhecer.

Por exemplo, se você estiver usando document.`getElementById`, TypeScript só sabe que isso retornará algum tipo de `HTMLElement`, mas você deve saber que sua página sempre terá um `HTMLCanvasElement` com um determinado ID.

Nessa situação, você pode usar uma _type assertion_ para especificar um tipo mais específico.

## Código desenvolvido para exemplificar:

~~~typescript
// condicional
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement
input.value = 'qualquer coisa'
input.focus()

/* Não recomendado */

// Non-null assertion(!)
const body2 = document.querySelector('body')!
body2.style.background = 'red'
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

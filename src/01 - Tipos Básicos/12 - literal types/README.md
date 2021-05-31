# Literal Types

Além dos tipos gerais `string` e `number`, podemos nos referir a nomes e números específicos nas posições de tipo.

Uma maneira de pensar sobre isso é considerar como o JavaScript vem com diferentes maneiras de declarar uma variável. Ambos `var` e `let` permitem alterar o que é mantido dentro da variável e `const` não. Isso se reflete em como o TypeScript cria tipos para literais.

## Código desenvolvido para exemplificar:

~~~typescript
let x = 10 // eslint-disable-line
x = 1010

const y = 10
const a = 100

console.log(x, y, a)

const pessoa = {
  nome: 'josé' as const,
  sobrenome: 'souza',
}

console.log(pessoa.nome)

~~~
---
Não adianta muito ter uma variável que só pode ter um valor literal.

Mas, combinando `literals` em `unions`, podemos expressar um conceito muito mais útil - por exemplo, funções que aceitam apenas um determinado conjunto de valores conhecidos. (Veja abaixo no exemplo encontrado na documentação)

**Exemplo da documentação:**
~~~typescript
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
~~~

Os tipos literais numéricos funcionam da mesma maneira:

~~~typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
~~~
---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

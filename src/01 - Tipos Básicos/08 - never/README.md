# Never

O tipo `never` representa o tipo de valores que nunca ocorrem. Por exemplo, `never` é o tipo de retorno para uma _function expression_ ou uma _arrow function_ que sempre lança uma exceção ou uma que nunca retorna. As variáveis ​​também adquirem o tipo `never`quando estreitadas por quaisquer protetores de tipo que nunca podem ser verdadeiros.

## Código desenvolvido para exemplificar:

~~~typescript

export function criaErro(): never {
  throw new Error('Qualquer erro')
}

criaErro()

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

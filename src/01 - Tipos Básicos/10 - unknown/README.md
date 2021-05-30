# unknown

Podemos precisar declarar uma variável ​​que não sabemos o tipo ao escrever nosso código. Esses valores podem vir de conteúdo dinâmico, do usuário ou podemos aceitar intencionalmente todos os valores em nossa aplicação.

Nesses casos, queremos fornecer um tipo que diga ao compilador e aos leitores futuros que essa variável pode ser qualquer coisa, então fornecemos o tipo `unknown` a ela.

Em outras palavras podemos dizer a grosso modo que `unknown` é um `any` mais seguro.

## Código desenvolvido para exemplificar:

~~~typescript
let x: unknown

x = 20
x = 30
x = '10'

const y = 300

if (typeof x === 'number') console.log(x + y)
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

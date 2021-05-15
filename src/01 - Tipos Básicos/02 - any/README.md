# any

O TypeScript também tem um tipo especial, `any` que você pode usar sempre que não quiser que um determinado valor cause erros de verificação de tipo.

Quando um valor é do tipo `any`, você pode acessar quaisquer propriedades dele (que por sua vez serão do tipo `any`), chamá-lo como uma função, atribuí-lo a (ou de) um valor de qualquer tipo ou praticamente qualquer outra coisa que seja sintaticamente jurídico.

O `any` tipo é útil quando você não deseja escrever um tipo longo apenas para convencer o TypeScript de que uma determinada linha de código está correta.

## Código desenvolvido para exemplificar:

~~~typescript

// Ultilizar any em último caso
function showMessage(msg: any): any {
  return msg
}

// console.log(showMessage([1, 2, 3]))
console.log(showMessage('Olá'))


~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

# void

`void` é um pouco como o oposto de `any`: a ausência de qualquer tipo. Normalmente, você pode ver isso como o tipo de retorno de funções que não retornam um valor


## Código desenvolvido para exemplificar:

~~~typescript

function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}
const pessoa = {
  nome: 'rubens',
  sobrenome: 'lavor',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}
semRetorno('rubens', 'lavor')
pessoa.exibirNome()

export { pessoa }


~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

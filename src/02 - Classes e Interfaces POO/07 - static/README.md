# static

O ES6 inclui membros estáticos e o TypeScript também. Os membros estáticos de uma classe são acessados ​​usando o nome da classe e a notação de ponto, sem criar um objeto, por exemplo, `<ClassName>.<StaticMember>`

Os membros estáticos podem ser definidos usando a palavra-chave `static`

## Código desenvolvido para exemplificar:

~~~typescript
export class Pessoa {
  // atributos estáticos
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
  // métodos estáticos
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
}

const pessoa = new Pessoa('José', 'Alberto', 40, '123.456.789-00')
const pessoa2 = Pessoa.criaPessoa('maria', 'lurdes')
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

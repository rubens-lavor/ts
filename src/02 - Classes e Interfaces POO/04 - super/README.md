# super

Assim como no JavaScript, se você tiver uma classe base, precisará chamar `super()` no corpo do construtor da classe derivada, antes de usar qualquer membro da classe base.

Esquecer de chamar `super` é um erro fácil de cometer em JavaScript, mas o TypeScript informa quando for necessário.

## Código desenvolvido para exemplificar:

~~~typescript
// super da acesso à super classe, para uma das subclasses.
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf)
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES')
    const result = super.getNomeCompleto()
    return result + ' oláaa'
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'classe Cliente - ' + this.nome + ' ' + this.sobrenome
  }
}

const aluno = new Aluno('Nome', 'Sobrenome', 15, '000.000.000-00', '1')

console.log(aluno)
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

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

// const pessoa = new Pessoa('Nome', 'Sobrenome', 15, '000.000.000-00')
const aluno = new Aluno('Nome', 'Sobrenome', 15, '000.000.000-00', '1')
// const cliente = new Cliente('Nome', 'Sobrenome', 15, '000.000.000-00')

console.log(aluno)

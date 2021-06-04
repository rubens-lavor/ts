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

console.log(pessoa)
console.log(pessoa2)
pessoa.metodoNormal()

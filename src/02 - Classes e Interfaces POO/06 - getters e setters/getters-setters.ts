export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf
  }

  // jeito tradicinal
  /*
  setCpf(valor: string): void {
    this.cpf = valor
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '')
  }
  */

  // maneira atualizada do js
  set cpf(valor: string) {
    console.log('SETTER CHAMADO')
    this._cpf = valor
  }

  get cpf(): string {
    console.log('GETTER CHAMADO')
    return this._cpf.replace(/\D/g, '')
  }
}

const pessoa = new Pessoa('José', 'Alberto', 40, '123.456.789-00')
// maneira atualizada do js para getters e setters
pessoa.cpf = '123.456.789-99'
console.log(pessoa.cpf)

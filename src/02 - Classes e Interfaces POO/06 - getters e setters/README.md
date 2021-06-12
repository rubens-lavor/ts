# Getters / Setters

O TypeScript tem algumas regras especiais de inferência para acessadores:

* Se não existir um `set`, a propriedade é automaticamente `readonly`
* O tipo do parâmetro `setter` é inferido do tipo de retorno do `getter`
* Se o parâmetro `setter` tiver uma anotação de tipo, ele deve corresponder ao tipo de retorno do `getter`
* Getters e setters devem ter a mesma visibilidade de membro
* Não é possível ter acessores com tipos diferentes

Se você tem um `getter` sem `setter`, o campo é automaticamente `readonly`

## Código desenvolvido para exemplificar:

~~~typescript
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf
  }

  /* Maneira tradicional

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
// maneira atualizada do js para getters e setters, como se tratasse de um atributo
pessoa.cpf = '123.456.789-99'
console.log(pessoa.cpf)

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

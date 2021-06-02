# class

O TypeScript oferece suporte para classes, introduzida no ES2015.

Como com outros recursos da linguagem JavaScript, o TypeScript adiciona anotações de tipo e outra sintaxe para permitir que você expresse relacionamentos entre classes e outros tipos.

## Código desenvolvido para exemplificar:

~~~typescript
export class Empresa {
  public readonly nome: string
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador)
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Qualquer Empresa', '11.111.111/0001-11')
const colaborador1 = new Colaborador('José', 'Miranda')
const colaborador2 = new Colaborador('Maria', 'Souza')
const colaborador3 = new Colaborador('Lucia', 'Lima')

empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)
empresa1.adicionaColaborador({
  nome: 'zé',
  sobrenome: 'roberto',
})

console.log(empresa1)
console.log(empresa1.nome)

empresa1.mostrarColaboradores()
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

export class Empresa {
  readonly nome: string
  protected readonly colaboradores: Colaborador[] = []
  private readonly cnpj: string

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

export class Qualquer_Empresa extends Empresa {
  constructor() {
    super('Nome da Empresa', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
  }
}

const empresa1 = new Qualquer_Empresa()
const colaborador1 = new Colaborador('José', 'Miranda')
const colaborador2 = new Colaborador('Maria', 'Souza')
const colaborador3 = new Colaborador('Lucia', 'Lima')

empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)

const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido)
console.log(empresa1)

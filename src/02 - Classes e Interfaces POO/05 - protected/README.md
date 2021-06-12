# protected

`protected` membros são visíveis apenas para as subclasses da classe em que foram declarados.

**Exposição de membros `protected`**

As classes derivadas precisam seguir seus contratos da classe base, que por sua vez pode optar por expor um subtipo com mais recursos. Isso inclui tornar os  membros `protected` ou `public`

## Código desenvolvido para exemplificar:

~~~typescript
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

export class Qualquer_Empresa extends Empresa {
  constructor() {
    super('Nome da Empresa', '11.111.111/0001-11')
  }

  retirarColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

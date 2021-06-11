# public e private (modificador de visibilidade)


Você pode usar o TypeScript para controlar se determinados métodos ou propriedades são visíveis ao código fora da classe.

`public`:

> A visibilidade padrão dos membros da classe é `public`. Um membro `public` pode ser acessado de qualquer lugar.

> Como `public` já é o modificador de visibilidade padrão, não é necessário escrevê-lo em um membro da classe, mas pode optar por fazê-lo por motivos de estilo / legibilidade.

-----

`private`:

> Um membro marcado como `private` não pode ser acessado de fora da classe que o contém.




## Código desenvolvido para exemplificar:

~~~typescript
export class Empresa {
  readonly nome: string
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
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

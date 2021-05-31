# intersection types

Os tipos de intersecção estão intimamente relacionados aos tipos de união, mas são usados ​​de maneira muito diferente. **Um tipo de interseção combina vários tipos em um**. Isso permite adicionar tipos existentes para obter um único tipo que tenha todos os recursos de que você precisa. Por exemplo, `TemNome & TemSobrenome & TemAltura` é um tipo que é `TemNome` e `TemSobrenome` e `TemAltura` . Isso significa que um objeto desse tipo terá todos os membros de todos os três tipos. Veja abaixo:

## Código desenvolvido para exemplificar:

~~~typescript
type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemAltura = { altura: number }
type Pessoa = TemNome & TemSobrenome & TemAltura

const outraPessoa: Pessoa = {
  altura: 1.5,
  nome: 'nome',
  sobrenome: 'sobrenome',
}

console.log(outraPessoa)

type AB = 'A' | 'B'
type AC = 'A' | 'C'

type Intersecao = AB & AC // "A"
~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

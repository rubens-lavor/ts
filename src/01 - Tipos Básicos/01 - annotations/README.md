# Type Annotations

Alguns dos tipos de valores mais comuns que encontraramos em código JavaScript, apresentados de maneira correspondente no TypeScript.


**Tipo em variáveis**

Ao declarar uma variável usando const, var ou let, você pode opcionalmente adicionar uma anotação de tipo para especificar explicitamente o tipo da variável. Na maioria dos casos, porém, isso não é necessário. Sempre que possível, o TypeScript tenta inferir automaticamente os tipos em seu código.

**Vetores**

Para especificar o tipo de um array como `[1, 2, 3]`, você pode usar a sintaxe `number[]`; essa sintaxe funciona para qualquer tipo (por exemplo, `string[]`é uma matriz de strings e assim por diante). Você também pode ver escrito como `Array<number>`, o que significa a mesma coisa. Aprenderemos mais sobre a sintaxe `T<U>` ao abordar os genéricos .

**Funções**

Funções são o meio principal de transmitir dados em JavaScript. TypeScript permite que você especifique os tipos de valores de entrada e saída das funções.

Anotações de tipo de parâmetro
Ao declarar uma função, você pode adicionar anotações de tipo após cada parâmetro para declarar quais tipos de parâmetros a função aceita. As anotações de tipo de parâmetro vêm após o nome do parâmetro


**Funções anônimas**

As funções anônimas são um pouco diferentes das declarações de funções. Quando uma função aparece em um lugar onde o TypeScript pode determinar como será chamada, os parâmetros dessa função recebem tipos automaticamente.

**Tipos de Objetos**

Além dos primitivos, o tipo mais comum de tipo que você encontrará é um tipo de objeto . Isso se refere a qualquer valor JavaScript com propriedades, que são quase todos eles! Para definir um tipo de objeto, simplesmente listamos suas propriedades e seus tipos.

**Propriedades Opcionais**

Os tipos de objeto também podem especificar que algumas ou todas as suas propriedades são opcionais . Para fazer isso, adicione um ?após o nome da propriedade

## Código desenvolvido para exemplificar:

~~~typescript
/* eslint-disable */

// tipos básicos (aqui ocorre interferência de tipos)
let nome: string = 'qualquer nome'
let symbol: symbol = Symbol('qualquer symbol')
let pessoa: boolean = true

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3]
let arrayDeStrings: Array<string> = ['a','b']
let arrayDeStrings2: string[] = ['a','b']

// Objetos
let pessoa2: {nome: string, idade:number, adulto?: boolean} = {
  idade:5,
  nome:'nome'
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}

const result = soma(2,2)

const soma2: (x: number, y: number) => number = (x , y) => x+y

~~~

Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

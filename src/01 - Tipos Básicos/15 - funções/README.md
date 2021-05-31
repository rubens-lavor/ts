# funções

Funções são o meio principal de transmitir dados em JavaScript. **TypeScript permite que você especifique os tipos de valores de entrada e saída das funções**.

## Código desenvolvido para exemplificar:

~~~typescript
type MapStringsCallback = (item: string) => string

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {

  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())

console.log(abc)
console.log(abcMapped)

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

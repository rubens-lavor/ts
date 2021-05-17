# Enum

Uma adição útil ao conjunto padrão de tipos de dados do `JavaScript` é o `enum`. Como em linguagens como `C#`, um `enum` é uma forma de dar nomes mais amigáveis ​​a conjuntos de valores numéricos.

Por padrão, os enums começam a numerar seus membros começando em 0. Você pode alterar isso definindo manualmente o valor de um de seus membros. Por exemplo, podemos iniciar em 1 em vez de 0. Ou até mesmo defina manualmente todos os valores no `enum`.

Um recurso útil dos enums é que você também pode ir de um valor numérico para o nome desse valor no enum.

## Código desenvolvido para exemplificar:

~~~typescript

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
}

console.log(Cores)
// console.log(Cores.VERMELHO)
// console.log(Cores[1])
// console.log(Cores.ROXO)

function escolhaCores(cor: Cores): void {
  console.log(Cores[cor])
}

escolhaCores(Cores.ROXO)

~~~

---
Para todas as definições e conceitos, foi usado como base a documentação oficial do TypeScript.

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

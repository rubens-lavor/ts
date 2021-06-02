interface Constructor {
  new (...args: any[]): any
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
    console.log('sou o decorador e recebi', target)
    return class extends target {
      cor: string
      nome: string

      constructor(...args: any[]) {
        super(...args)
        this.nome = this.inverterString(args[0])
        this.cor = this.inverterString(args[1])
      }

      inverterString(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2
      }
    }
  }
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('sou o segundo decorador' + ' ' + param1)
  }
}
@outroDecorador('parametro 1') // 2
@inverteNomeECor('outra coisa', 'valor2') // 1
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('sou a classe')
  }
}

const animal = new Animal('cachorro', 'roxo')
console.log(animal)

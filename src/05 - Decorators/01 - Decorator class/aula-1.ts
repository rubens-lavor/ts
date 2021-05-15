@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string
    nome: string

    constructor(...args: any[]) {
      super(...args)
      this.nome = this.inverterString(args[0])
      this.cor = this.inverterString(args[1])
    }

    inverterString(valor: string): string {
      return valor.split('').reverse().join('')
    }
  }
}

// const AnimalDecorated = decorator(Animal)
const animal = new Animal('cachorro', 'roxo')
console.log(animal)

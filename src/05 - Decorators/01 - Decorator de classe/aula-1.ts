export class Animal {
  constructor(public cor: string) {}
}

function decorator(target: any): any {
  return target
}

const animal = new Animal('roxo')
console.log(animal)

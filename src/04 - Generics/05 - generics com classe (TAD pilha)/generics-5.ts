export class Stack<T> {
  private count = 0
  private elementos: { [k: number]: T } = {}

  _push(elemento: T): void {
    this.elementos[this.count] = elemento
    this.count++
  }

  _pop(): T | void {
    if (this._isEmpty()) return undefined

    this.count--
    const elemento = this.elementos[this.count]
    delete this.elementos[this.count]

    return elemento
  }

  _isEmpty(): boolean {
    return this.count === 0
  }

  _length(): number {
    return this.count
  }

  show(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key])
    }
  }
}

const myStack = new Stack()
// outra forma, especificando os tipos esperados
// const myStack = new Stack<number | string>()

myStack._push(1)
myStack._push(2)
myStack._push(3)
myStack._push('string')

myStack.show()

console.log('\n')

while (!myStack._isEmpty()) {
  console.log(myStack._pop())
}

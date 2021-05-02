//predicado
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function soma<T>(...args: T[]): number {
  const returno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value
    }
    return sum
  }, 0)

  return returno
}

console.log(soma(1, 2, 3))
console.log(soma(...[1, 2, 3, 'a']))
console.log(soma('a', 'b', 'c'))

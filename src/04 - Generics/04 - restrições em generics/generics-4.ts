type GetValueFn = <O, k extends keyof O>(objeto: O, chave: k) => O[k]

const getValueFn: GetValueFn = (objeto, chave) => objeto[chave]

const animal = {
  cor: 'rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10,
}

const vacinas = getValueFn(animal, 'vacinas')
const cor = getValueFn(animal, 'cor')

console.log(vacinas, cor, getValueFn(animal, 'idade'))

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

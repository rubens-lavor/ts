// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string
  texto: string
  data?: Date
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texo',
  // data: new Date(),
}

console.log(documento.data?.toDateString() ?? 'não existe data')
console.log(undefined ?? '1 - não existe')
console.log(null ?? '2 - não existe')

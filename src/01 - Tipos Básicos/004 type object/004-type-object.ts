const objetoA: {
  chaveA: string
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'valor A',
  chaveB: 'Valor B',
}

objetoA.chaveA = 'outro valor'
objetoA.chaveC = 'nova chave'

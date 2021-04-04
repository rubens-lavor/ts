function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}
const pessoa = {
  nome: 'rubens',
  sobrenome: 'lavor',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}
semRetorno('rubens', 'lavor')
pessoa.exibirNome()

export { pessoa }

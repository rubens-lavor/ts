export class CarrinhoDeCompras {
  private readonly prudutos: Produto[] = []

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.prudutos.push(produto)
    }
  }

  quantidadeProdutos(): number {
    return this.prudutos.length
  }

  valorTotal(): number {
    return this.prudutos.reduce((soma, produto) => soma + produto.preco, 0)
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 49.9)
const produto2 = new Produto('calça', 89.9)
const produto3 = new Produto('tênis', 99.9)

const carrinhoDeCompras = new CarrinhoDeCompras()

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3)
console.log(carrinhoDeCompras)
console.log(carrinhoDeCompras.valorTotal().toFixed(2))
console.log(carrinhoDeCompras.quantidadeProdutos())

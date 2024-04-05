import { Comprador, Pagamento, PedidoEcommerce, Produto } from "./types";

class Pedido {
  private pedidoEcommerce = {} as PedidoEcommerce;

  setData(data: string): Pedido {
    this.pedidoEcommerce.data = data;
    return this;
  }

  setComprador(comprador: Comprador): Pedido {
    this.pedidoEcommerce.comprador = comprador;
    return this;
  }

  setPagamento(pagamento: Pagamento): Pedido {
    this.pedidoEcommerce.pagamentos = this.pedidoEcommerce.pagamentos ?? [];
    this.pedidoEcommerce.pagamentos.push(pagamento);
    return this;
  }

  setProdutos(produtos: Produto[]): Pedido {
    this.pedidoEcommerce.produtos = produtos;
    return this;
  }

  somarPagamentos(): Pedido {
    this.pedidoEcommerce.valortotal =
      this.pedidoEcommerce.pagamentos?.reduce(
        (prev, curr) => prev + curr.valor,
        0
      ) ?? 0;
    return this;
  }

  build(): PedidoEcommerce {
    return this.pedidoEcommerce;
  }
}

const pedido = new Pedido()
  .setData("04/04/2024")
  .setComprador({ cpf: "123456", nome: "agnaldo" })
  .setPagamento({ id: "1", tipo: "CARTAO CREDITO", valor: 100 })
  .setPagamento({ id: "3", tipo: "BOLETO", valor: 162.89 })
  .setProdutos([
    { nome: "LAVADORA", qtd: 2, valor: 150 },
    { nome: "FOGAO", qtd: 1, valor: 690 },
  ])
  .somarPagamentos()
  .build();
console.log(pedido);

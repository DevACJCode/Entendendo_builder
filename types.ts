export type PedidoEcommerce = {
  data: string;
  valortotal: number;
  comprador: Comprador;
  produtos: Produto[];
  notafiscal: NotaFiscal;
  pagamentos?: Pagamento[];
};

export type Comprador = {
  nome: string;
  cpf: string;
  endereco?: Endereco;
  telefones?: Telefone[];
};

export type Endereco = {
  logradouro: string;
  bairro: string;
  numero: string;
  cep: string;
};

export type Telefone = {
  ddd: string;
  number: string;
};

export type Produto = {
  nome: string;
  qtd: number;
  valor: number;
};

export type NotaFiscal = {
  numero: string;
  serie: string;
  chave: string;
};

export type Pagamento = {
  id: string;
  tipo: string;
  valor: number;
};

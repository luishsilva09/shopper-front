export interface StatePropriesData {
  cost: string;
  data: {
    code: number;
    name: string;
    cost_price: string;
    sales_price: string;
  };

  invalidElement: string | boolean;
  new_price: string;
  novoPreco: string | boolean;
  product_code: string;
}

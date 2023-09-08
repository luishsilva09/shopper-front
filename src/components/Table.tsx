import styled from "styled-components";
import { StatePropriesData } from "../services/interfaces";

export default function TableRender({
  data,
  setError,
}: React.PropsWithChildren<any>) {
  return (
    <Table>
      <tbody>
        <tr>
          <th>Codigo</th>
          <th>Nome</th>
          <th>Preco atual</th>
          <th>Novo Preco</th>
          <th>Campos validos</th>
          <th>Produto existe</th>
          <th>Os 10%</th>
          <th>Preco vs Custo</th>
        </tr>
        {data.map((item: StatePropriesData, index: number) => {
          if (
            item.invalidElement !== "Dados OK" ||
            typeof item.data == "string" ||
            item.novoPreco !== "Dados OK" ||
            item.cost !== "Dados OK"
          ) {
            setError(true);
          }
          return (
            <tr key={index}>
              <td>{item.product_code}</td>
              <td>{item.data.name ? item.data.name : "Não existe"}</td>
              <td>
                R$
                {Number(
                  item.data.sales_price ? item.data.sales_price : 0
                ).toFixed(2)}
              </td>
              <td>R$ {Number(item.new_price).toFixed(2)}</td>
              <td>{item.invalidElement == "Dados OK" ? "Ok" : ""}</td>
              <td>{typeof item.data == "string" ? "" : "OK"}</td>
              <td>{item.novoPreco == "Dados OK" ? "OK" : item.novoPreco}</td>
              <td>{item.cost == "Dados OK" ? "OK" : item.cost}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
const Table = styled.table`
  th,
  tr,
  td {
    border: 1px solid;
    padding: 5px;
    text-align: center;
  }
  border: 1px solid;
  margin: 20px;
`;

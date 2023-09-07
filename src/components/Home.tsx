import { useState } from "react";
import TableRender from "./Table";
import FormRender from "./Form";
import { StatePropriesData } from "../services/interfaces";
import styled from "styled-components";

export default function Home() {
  const [file, setFile] = useState<FormData>();
  const [data, setData] = useState<StatePropriesData[]>([]);
  const [error, setError] = useState<boolean>(false);

  return (
    <Container>
      <h1>Atualizar dados</h1>
      <FormRender setData={setData} file={file} setFile={setFile} />
      <TableRender data={data} setError={setError} />
      <button disabled={error} onClick={() => console.log("Atualizado")}>
        Atualizar
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  h1 {
    font-size: 40px;
    margin: 20px;
  }
`;

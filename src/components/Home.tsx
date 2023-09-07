import { useState } from "react";
import TableRender from "./Table";
import FormRender from "./Form";
import { StatePropriesData } from "../services/interfaces";
import styled from "styled-components";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [file, setFile] = useState<FormData>();
  const [data, setData] = useState<StatePropriesData[]>([]);
  const [error, setError] = useState<boolean>(true);

  async function update() {
    setError(true);
    await api.post("/update", data).then(() => {
      toast.success("Atualizado");
      setError(true);
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }
  return (
    <Container>
      <ToastContainer theme="colored" autoClose={1500} />
      <h1>Atualizar dados</h1>
      <FormRender
        setData={setData}
        file={file}
        setFile={setFile}
        setError={setError}
      />
      <TableRender data={data} setError={setError} />
      <button disabled={error} onClick={() => update()}>
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

import api from "../services/api";
import { StatePropriesData } from "../services/interfaces";

export default function FormRender({
  setFile,
  file,
  setData,
  setError,
}: React.PropsWithChildren<any>) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0]);
  }

  const handleOnSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("file", file);
      api.post("/sendFile", data).then((e) => {
        setData(e.data);
        setError(false);
      });
    }
  };
  return (
    <form>
      <h2>Selecione o arquivo</h2>
      <input
        type="file"
        accept=".csv"
        onChange={(event) => handleOnChange(event)}
      />
      <button onClick={(e) => handleOnSubmit(e)}>Validar</button>
    </form>
  );
}

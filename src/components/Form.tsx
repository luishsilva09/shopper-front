import api from "../services/api";

export default function FormRender(props: any) {
  const handleOnChange = (e: any) => {
    props.setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.file) {
      const data = new FormData();
      data.append("file", props.file);
      api.post("/sendFile", data).then((e) => {
        props.setData(e.data);
        props.setError(false);
      });
    }
  };
  return (
    <form>
      <h2>Selecione o arquivo</h2>
      <input type="file" accept=".csv" onChange={handleOnChange} />
      <button onClick={(e) => handleOnSubmit(e)}>Validar</button>
    </form>
  );
}

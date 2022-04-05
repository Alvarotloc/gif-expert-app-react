import { FormEvent, useState } from "react";

interface catParams {
  setCategorias: Function;
}

const AddCategory = ({ setCategorias }: catParams): JSX.Element => {
  const [textoTemp, setTextoTemp] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (textoTemp.trim() !== "") {
      setCategorias((categorias: string[]) => [textoTemp, ...categorias]);
      setError(false);
      return setTextoTemp("");
    }
    setError(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese categoría"
        value={textoTemp}
        autoFocus
        onChange={(e) => setTextoTemp(e.target.value)}
      />
      <input type="submit" value="Crear Categoría" />
      {error ? <p className="error">Debe completar el campo</p> : null}
    </form>
  );
};

export default AddCategory;

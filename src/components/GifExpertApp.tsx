import { useState } from "react";

import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = (): JSX.Element => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      {categorias.map((categoria: string) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;

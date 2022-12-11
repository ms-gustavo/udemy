import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Gustavo");

  return (
    <>
      <h1>Isso será exibido?</h1>
      {/* Se tiver if simples (exiba isso se aquilo for true, etc), var + && + oq imprimir */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora X é falso</p>}
      <h1>If Ternário</h1>
      {name === "Gustavo" ? (
        <div>
          <p>O nome é Gustavo</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clica aqui</button>
    </>
  );
};

export default CondicionalRender;

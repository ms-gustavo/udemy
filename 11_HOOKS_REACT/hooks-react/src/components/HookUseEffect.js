import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  //2 - useEffect, com array de dependências vazio
  useEffect(() => {
    console.log("Array de deps vazio");
  }, []);

  //3 - useEffect com array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Com array de dependências");
    }
  }, [anotherNumber]);

  // 4 - cleanUp do useEffect
  useEffect(() => {
    //const timer = setTimeout(() => {
    //console.log("Hello World");
    //setAnotherNumber(anotherNumber + 1);
    //}, 2000);
    //return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;

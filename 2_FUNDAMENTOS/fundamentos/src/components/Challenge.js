const Challenge = () => {
  const a = 5;
  const b = 10;

  return (
    <>
      <p>
        Primeiro valor: {a}
        <br></br>
        Segundo valor: {b}
      </p>
      <div>
        <button onClick={() => console.log(a + b)}>Somar valores</button>
      </div>
    </>
  );
};

export default Challenge;

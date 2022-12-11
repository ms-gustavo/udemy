const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h4>Renderizando isso</h4>;
    } else {
      return <h4>Também posso renderizar isso</h4>;
    }
  };
  return (
    <>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log(`Clicou`)}>
          Clique aqui também
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log(
                `Isso funciona, mas não deveria misturar lógica com HTML`
              );
            }
          }}
        >
          Clique aqui, por favor
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  );
};

export default Events;

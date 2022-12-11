import MyComponent from "./MyComponent";

// comentário fora do JSX
const FirstComponent = () => {
  // comentário fora do JSX
  return (
    //comentário fora do JSX
    /*
     Abc
    */
    <>
      <h2>Meu primeiro componente</h2>
      <p className="teste">First Component</p>
      {/* Comentário no JSX*/}
      <MyComponent />
    </>
  );
};

export default FirstComponent;

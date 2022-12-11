const TemplateExpressions = () => {
  const name = "Gustavo";
  const data = {
    age: 27,
    job: "Student",
  };

  return (
    <>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>Voce tem {data.age} anos?</p>
      <p>{console.log("JSX React")}</p>
    </>
  );
};

export default TemplateExpressions;

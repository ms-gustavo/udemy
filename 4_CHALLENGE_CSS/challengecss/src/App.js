import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      km: 0,
      color: "Vermelho",
      isNew: true,
    },
    {
      id: 2,
      brand: "Bugatti",
      km: 0,
      color: "Branco",
      isNew: true,
    },
    {
      id: 3,
      brand: "MCLaren",
      km: 1500,
      color: "Preto",
      isNew: false,
    },
    {
      id: 4,
      brand: "Fiat Uno",
      color: "Preto",
      km: 100000,
      isNew: false,
    },
  ];

  return (
    <div className="App">
      <h1>Meus carros:</h1>
      <div className="cars-container">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            img={car.img}
            brand={car.brand}
            KM={car.km}
            color={car.color}
            isNew={car.isNew}
          />
        ))}
      </div>
      <div>
        <img src="./ferrari.png" alt="Ferrari" />
        <img src="./bugatti.png" alt="Bugatti" />
        <img src="./mclaren.png" alt="MCLaren" />
        <img src="./fiat.png" alt="Fiat" />
      </div>
    </div>
  );
}

export default App;

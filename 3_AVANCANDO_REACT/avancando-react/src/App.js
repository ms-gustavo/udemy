import { useState } from "react";
import "./App.css";

import Img2 from "./assets/img2.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import CondicionalRender from "./components/CondicionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Ayrton");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Buggati", color: "Branco", newCar: true, km: 0 },
    { id: 3, brand: "Gol Bola", color: "Amarelo", newCar: false, km: 250000 },
  ];

  const persons = [
    { id: 1, name: "Gustavo", age: 27, occupation: "WEB Dev" },
    { id: 2, name: "Ayrton", age: 26, occupation: "Dev Senior" },
    { id: 3, name: "Pena", age: 17, occupation: "Student" },
  ];

  function showMessage() {
    console.log(`Evento do componente pai!`);
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" width="100%" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={Img2} alt="Ponte" width="100%" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        {/* Props */}
        <ShowUserName name={userName} />
        {/* Destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        {/* Reaproveitamento */}
        <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
        <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        {/* Fragments */}
        <Fragments propFragments="teste" />
        {/* Children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="testing 2">
          <p>Testando o container</p>
        </Container>
        {/* Executar função (nome da prop pode ser o nome da função*/}
        <ExecuteFunction myFunction={showMessage} />
        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
        {/* Desafio */}
        {persons.map((person) => (
          <UserDetails
            key={person.id}
            name={person.name}
            age={person.age}
            occupation={person.occupation}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

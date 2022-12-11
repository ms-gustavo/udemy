import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Gustavo", "Ayrton", "Nsk", "Xereba"]);

  const [user, setUser] = useState([
    { id: 1, name: "Gustavo", age: 27 },
    { id: 2, name: "Ayrton", age: 26 },
    { id: 3, name: "Nsk", age: 28 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUser((prevUser) => {
      console.log(prevUser);
      return prevUser.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      {/* Key por indice do map */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* Key por id da list */}
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </>
  );
};

export default ListRender;

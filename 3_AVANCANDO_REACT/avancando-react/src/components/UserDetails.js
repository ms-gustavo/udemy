import React from "react";

const UserDetails = ({ name, age, occupation }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>
        Idade: {age}, Profissão: {occupation}
      </p>
      {age >= 18 ? (
        <p>Esse usuário pode tirar CNH</p>
      ) : (
        <p>Esse usuário não pode tirar CNH</p>
      )}
    </>
  );
};

export default UserDetails;

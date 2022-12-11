import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>
        Este é o título do container
        {children}
        <p>O valor é {myValue}</p>
      </h2>
    </div>
  );
};

export default Container;

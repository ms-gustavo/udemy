import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  // 6 - Controlled Inputs
  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  //console.log(name);
  //console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault(); //Não recarregar a página ao envio
    console.log(`Enviando o formulário`);
    //Validações \/
    console.log(name, email, bio, role);
    // Envio \/
    // 7 - Limpar Forms
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5 - Envio de Forms */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6.1 - Controlled Input
            value={name}
          />
        </div>
        {/* Label envolvendo Input - Mais sugerida*/}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            // 4.1 - Manipulação simples Inline de Valores
            onChange={(e) => setEmail(e.target.value)}
            // 6.1 - Controlled Input
            value={email}
          />
        </label>
        {/* 8 - Text Area */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do Usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* Input Select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

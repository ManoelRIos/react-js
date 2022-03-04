import React, { useState }from "react";

import './styles.css'

const HomePage = () =>{
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Submit", {name, password});
  }

  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label className="sr-only" htmlFor="name">Nome</label>
          <input 
          type="text"
          name="name" 
          id="name" 
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="sr-only" htmlFor="password">Senha</label>
          <input
          type="password" 
          name="password" 
          id="password" 
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({});


  useEffect(async () => {
    const usuario = prompt("Digite seu Usuário do Git Hub:");

    if (usuario == null) {
      alert("Digite um usuário!");
    } else {
      const response = await fetch('https://api.github.com/users/' + usuario + '/repos');
      const data = await response.json();

      const resposta = await fetch('https://api.github.com/users/' + usuario);
      const dataDois = await resposta.json();

      setRepositories(data);
      setUser(dataDois);
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#eee", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", margin: "auto", alignItems: "center" }}>
      <div style={{ backgroundColor: "#ccc", borderRadius: "20px", padding: "20px", boxShadow: "0 0 1em black" }}>
        <img src={user.avatar_url} alt="foto de perfil do git hub" style={{ height: "200px", borderRadius: "20px", display: "flex", margin: "auto" }} />
        <div style={{ textAlign: "center" }}>
          <h1>Git Hub da(o) {user.name}</h1>
          <p>Trabalha no(a) {user.company}</p>
          <p>Mora em {user.location}</p>
          <p>{user.bio}</p>

          <ul style={{ padding: "0px", margin: "0px" }}>
            <h3>Repositórios</h3>
            {repositories.map(repo => (
              <li style={{ listStyle: "none" }} key={repo.id}><a href={repo.html_url} target="_blank">{repo.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import Titulo from './components/Titulo';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/CarolAguera/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  return (
    <div>
      <Titulo titulo="GitHub de Carolina Aguera"/>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
import { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs"

function Card() {
  const [repo, setRepo] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/priKSouza/repos")
      .then((response) => response.json())
      .then((data) => setRepo(data));
  }, []);

  useEffect(() => {
    setFiltro(
      repo.filter((repositorios) => {
        return repositorios.name.includes(busca);
      })
    );
  }, [repo, busca]);

  return (
    <>
      <input
        className="input"
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Digite o repositorio"
      />
      {filtro.map((pessoa) => (
        <div className="card-principal" key={pessoa.id}>
          <h3 className="repos">{pessoa.name}</h3>
          <h5 className="linguagem">{pessoa.language}</h5>
          <a href={pessoa.html_url} target="_blank" rel="noreferrer">
            <BsArrowReturnRight size={16} color="#000"/>
          </a>
        </div>
      ))}
    </>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Index = () => {
  const [dinos, setDinos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/`)
      .then(async (res) => await res.json())
      .then((json) => setDinos(json));
  }, []);

  return (
    <div className="index">
      <h1>Welcome to the Dinosaur app</h1>
      <img src="../vite-deno.svg" alt="Vite with Deno" />
      <p>Click on a dinosaur below to learn more.</p>
      <ul>
        {dinos.map((dino, index) => {
          return (
            <li key={index}>
              <Link to={`/${dino.name.toLowerCase()}`}>{dino.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Clock from "../components/Clock";
import "./CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) {
    return (
      <div className="detail-loading">
        <p>Loading character details...</p>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <div className="detail-card">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <div className="character-details">
          <h1 className="character-name">{character.name}</h1>
          <Detail label="Status" value={character.status} />
          <Detail label="Species" value={character.species} />
          <Detail label="Type" value={character.type || "N/A"} />
          <Detail label="Gender" value={character.gender} />
          <Detail label="Origin" value={character.origin.name} />
          <Detail label="Location" value={character.location.name} />
          <Detail
            label="Episodes"
            value={`${character.episode.length} episodes`}
          />
        </div>
      </div>

      <footer className="detail-footer">
        <Clock />
      </footer>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <p className="character-detail">
      <strong>{label}:</strong> {value}
    </p>
  );
}

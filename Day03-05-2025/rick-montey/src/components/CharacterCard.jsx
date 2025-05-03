import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/character/${character.id}`)}
        className="card"
      >
        <img src={character.image} alt={character.name} />
        <div className="card-content">
          <h2>{character.name}</h2>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status ${character.status.toLowerCase()}`}>
              {character.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

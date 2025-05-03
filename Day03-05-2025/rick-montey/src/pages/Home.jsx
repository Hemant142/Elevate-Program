import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Clock from "../components/Clock";
import "./Home.css";

export default function Home() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    navigate(`/character/${randomId}`);
  };

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        let characters = [];
        let nextUrl = "https://rickandmortyapi.com/api/character";
        while (nextUrl) {
          const res = await fetch(nextUrl);
          const data = await res.json();
          characters = characters.concat(data.results);
          nextUrl = data.info.next;
        }
        setAllCharacters(characters);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllCharacters();
  }, []);

  const totalPages = Math.ceil(allCharacters.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const selectedCharacters = allCharacters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="home">
      <h1 style={{ color: "black" }}>Rick and Morty Encyclopedia</h1>

      <div className="grid">
        {selectedCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        <span className="page-info">
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>

      <div className="random-character">
        <button onClick={handleRandomClick}>Go to Random Character</button>
      </div>

      <footer className="detail-footer">
        <Clock />
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Clock from "../components/Clock";
import "./Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setTotalPages(data.info.pages);
      });
  }, [page]);

  return (
    <div className="home">
      <h1 style={{ color: "black" }}>Rick and Morty Encyclopedia</h1>

      <div className="grid">
        {characters.map((char) => (
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

      <footer className="detail-footer">
        <Clock />
      </footer>
    </div>
  );
}

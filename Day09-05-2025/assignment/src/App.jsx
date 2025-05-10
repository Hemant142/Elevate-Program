import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
// import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Meomize filtered + sorted List

  const filteredList = useMemo(() => {
    const filtered = feedbackList.filter((f) =>
      f.name.toLowerCase().includes(search.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "recent") {
        return b.timestamp - a.timestamp;
      } else {
        b.ratting - a.rating;
      }
    });
    return sorted;
  }, [search, feedbackList, sortBy]);
  console.log(filteredList, "filteredList");
  const addFeedback = (feedback) => {
    console.log(addFeedback);
    setFeedbackList((prev) => [...prev, feedback]);
  };
  const clearFeedback = () => setFeedbackList([]);
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Feedback Manager</h1>
      <FeedbackForm onSubmit={addFeedback} />

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rating</option>
        </select>
        <button onClick={clearFeedback} style={{ marginLeft: "10px" }}>
          Clear Feedback
        </button>
      </div>
      <FeedbackList feedback={filteredList} />
    </div>
  );
}

export default App;

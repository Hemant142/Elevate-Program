import React, { useRef, useState } from "react";

export default function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const ratingRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = Number(ratingRef.current.value);
    if (!name.trim() || !feedback.trim()) {
      alert("Name and Feedback are required.");
      return;
    }
    const newFeedback = {
      id: Date.now(),
      name,
      feedback,
      rating: isNaN(rating) ? 0 : rating,
      timestamp: new Date(),
    };
    console.log(newFeedback, "New Feedback");
    onSubmit(newFeedback);
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <br />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ width: "300px", height: "80px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>Rating (1-5):</label>
        <br />
        <input
          type="number"
          min="1"
          max="5"
          ref={ratingRef}
          style={{ width: "80px", marginBottom: "10px" }}
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

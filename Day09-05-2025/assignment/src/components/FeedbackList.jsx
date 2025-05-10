import React from "react";

const FeedbackList = ({ feedback }) => {
  console.log(feedback, "feedback");
  if (feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  if (feedback.length > 10) {
    return <p>Too many results, please refine your search</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {feedback.map((item, index) => (
        <div
          key={index}
          style={{
            border: item.rating === "5" ? "2px solid green" : "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "245px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{item.name}</h3>
          <p>
            <strong>Feedback:</strong> {item.feedback}
          </p>
          <p>
            <strong>Rating:</strong> {item.rating}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#666" }}>
            {new Date(item.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;

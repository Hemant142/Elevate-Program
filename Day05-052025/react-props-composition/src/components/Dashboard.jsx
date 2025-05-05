import LoginMessage from "./LoginMessage";

function Dashboard({ isLoggedIn }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <LoginMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Dashboard;

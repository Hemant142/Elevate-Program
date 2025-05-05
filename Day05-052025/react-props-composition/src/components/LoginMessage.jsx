function LoginMessage({ isLoggedIn }) {
  return (
    <h2
      style={{
        color: isLoggedIn ? "green" : "gray",
        textAlign: "center",
        margin: "1rem 0",
      }}
    >
      {isLoggedIn ? "Welcome back, User!" : "Please log in."}
    </h2>
  );
}

export default LoginMessage;

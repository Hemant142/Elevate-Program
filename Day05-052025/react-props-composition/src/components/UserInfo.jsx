function UserInfo({ name, email, bio }) {
  return (
    <div>
      <h3 style={{ marginBottom: 4 }}>{name}</h3>
      <p style={{ fontSize: 14, color: "#555" }}>Email: {email}</p>
      <p style={{ fontSize: 14, color: "#777" }}>{bio}</p>
    </div>
  );
}

export default UserInfo;

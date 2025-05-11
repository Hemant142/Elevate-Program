import React, { useRef } from "react";

const UserProfileCard = ({ user, status, setStatus }) => {
  const statusRef = useRef();
  const emailRef = useRef();

  const handleEditStatus = () => {
    statusRef.current.focus();
  };

  const handleCopyEmail = () => {
    emailRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong>
        <input
          ref={emailRef}
          value={user.email}
          readOnly
          style={{ marginLeft: "0.5rem" }}
        />
        <button onClick={handleCopyEmail}>Copy Email</button>
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}{" "}
        <span style={{ color: "green" }}>[Developer]</span>
      </p>
      <div>
        <strong>Status:</strong> {status}
        <br />
        <input
          ref={statusRef}
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button onClick={handleEditStatus}>Edit Status</button>
      </div>
    </div>
  );
};

export default UserProfileCard;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UserProfileCard from "../components/UserProfileCard";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [status, setStatus] = useState("Coding in progress...");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) {
      setError(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [user]);

  if (!user) return <p>Please login to see your dashboard</p>;
  if (loading) return <p>Loading your data…</p>;
  if (error) return <p>Failed to load profile</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfileCard user={user} status={status} setStatus={setStatus} />
      <p style={{ color: "green", marginTop: "1rem" }}>Status Updated</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

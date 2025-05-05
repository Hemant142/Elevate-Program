import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import UserDashboard from "./components/UserDashboard";

function App() {
  const user = {
    isLoggedIn: true,
    name: "Hemant Yadav",
    email: "hemant@example.com",
    bio: "Stock market enthusiast.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhWbVdlAVH_7MH34V4jP0HVmpRltk-Y5Cmw&s",
  };

  function getTimeOfDay() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  const loggedOut = { isLoggedIn: false };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>React Component Design Assignment</h1>

      <Greeting name={user.name} timeOfDay={getTimeOfDay()} />

      <hr />

      <UserProfile user={user} />

      <hr />
      <Dashboard isLoggedIn={false} />
      <Dashboard isLoggedIn={user.isLoggedIn} />

      <hr />

      <UserDashboard user={user} />
      <UserDashboard user={loggedOut} />
    </div>
  );
}

export default App;

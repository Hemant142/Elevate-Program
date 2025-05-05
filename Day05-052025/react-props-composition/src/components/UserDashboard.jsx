import styles from "./UserDashboard.module.css";
import UserProfile from "./UserProfile";

function UserDashboard({ user }) {
  return (
    <div className={styles.container}>
      {user.isLoggedIn ? (
        <>
          <UserProfile user={user} />
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <>
          <h2 className={styles.loginPrompt}>You need to log in.</h2>
          <button className={styles.login}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserDashboard;

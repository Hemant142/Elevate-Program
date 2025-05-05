import styles from "./UserProfile.module.css";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserProfile({ user }) {
  return (
    <div className={styles.container}>
      <Avatar imageUrl={user.imageUrl} alt={user.name} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
}

export default UserProfile;

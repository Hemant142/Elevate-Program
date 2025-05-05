import styles from "./Greeting.module.css";

function Greeting({ name, timeOfDay }) {
  return (
    <h2 className={styles.greeting}>
      Good {timeOfDay}, {name}!
    </h2>
  );
}

export default Greeting;

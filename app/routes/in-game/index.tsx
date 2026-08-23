import styles from "./index.module.css";
export function meta() {
  return [{ title: "In Game" }];
}

export function ServerComponent() {
  return <div className={styles.inGamePage}></div>;
}

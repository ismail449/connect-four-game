import styles from "./index.module.css";
export function meta() {
  return [{ title: "In Game" }];
}

export default function InGame() {
  return <div className={styles.inGamePage}></div>;
}

import InGameNaveBar from "~/components/in-game-nav-bar/in-game-nav-bar";

import styles from "./index.module.css";
export function meta() {
  return [{ title: "In Game" }];
}

export default function InGame() {
  return (
    <div className={styles.inGamePage}>
      <div className={styles.gameContainer}>
        <InGameNaveBar />
      </div>
    </div>
  );
}

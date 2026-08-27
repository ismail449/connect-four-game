import { RulesButton } from "~/components/rules-button/rules-button";

import styles from "./index.module.css";

export function meta() {
  return [
    { title: "Game Rules" },
    { name: "description", content: "Game rules" },
  ];
}

export function ServerComponent() {
  return (
    <div className={styles.rulesPage}>
      <div className={styles.rulesContainer}>
        <h1 className={styles.rulesHeader}>Rules</h1>
        <section className={styles.section}>
          <h2 className={styles.header}>OBJECTIVE</h2>
          <p className={styles.description}>
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>HOW TO PLAY</h2>
          <ol className={styles.description}>
            <li>Red goes first in the first game.</li>
            <li>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </section>
        <RulesButton to="/" />
      </div>
    </div>
  );
}

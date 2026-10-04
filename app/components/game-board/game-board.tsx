import { generateGrid } from "~/utils/generateGrid";

import styles from "./game-board.module.css";

export default function GameBoard() {
  const columns = 7;
  const rows = 6;
  const cellSize = 100;
  const holeRadius = 32;

  return (
    <div className={styles.boardContainer}>
      <svg
        className={styles.board}
        viewBox={`0 0 ${columns * cellSize} ${rows * cellSize}`}
      >
        <mask id="board-mask">
          <rect width="100%" height="100%" fill="white" />

          {generateGrid(columns, rows).map((uuid, i) => {
            const col = i % columns;
            const row = Math.floor(i / columns);
            return (
              <circle
                width="64px"
                height="64px"
                key={uuid}
                cx={col * cellSize + cellSize / 2}
                cy={row * cellSize + cellSize / 2}
                r={holeRadius}
                fill="black"
              />
            );
          })}
        </mask>

        <rect width="100%" height="100%" fill="white" mask="url(#board-mask)" />

        {generateGrid(columns, rows).map((uuid, i) => {
          const col = i % columns;
          const row = Math.floor(i / columns);
          return (
            <circle
              key={`border-${uuid}`}
              cx={col * cellSize + cellSize / 2}
              cy={row * cellSize + cellSize / 2}
              r={holeRadius}
              fill="transparent"
              className={styles.boardHole}
            />
          );
        })}
      </svg>
    </div>
  );
}

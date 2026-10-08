import { calculateGridHolePosition } from "~/utils/calculateGridHolePosition";
import { generateGrid } from "~/utils/generateGrid";

import styles from "./game-board.module.css";
/* constants */
const columns = 7;
const rows = 6;
const holeRadius = 32;
const padding = 24;

export default function GameBoard() {
  return (
    <div className={styles.boardContainer}>
      <svg className={styles.board} viewBox={`0 0 632 584`}>
        <mask id="board-mask">
          <rect width="100%" height="100%" fill="white" />

          {generateGrid(columns, rows).map((uuid, i) => {
            const col = i % columns;
            const row = Math.floor(i / columns);

            const [cy, cx] = calculateGridHolePosition(
              row,
              col,
              holeRadius,
              padding
            );
            return (
              <circle key={uuid} cx={cx} cy={cy} r={holeRadius} fill="black" />
            );
          })}
        </mask>

        <rect width="100%" height="100%" fill="white" mask="url(#board-mask)" />

        {generateGrid(columns, rows).map((uuid, i) => {
          const col = i % columns;
          const row = Math.floor(i / columns);
          const [cy, cx] = calculateGridHolePosition(
            row,
            col,
            holeRadius,
            padding
          );

          return (
            <circle
              key={`border-${uuid}`}
              cx={cx}
              cy={cy}
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

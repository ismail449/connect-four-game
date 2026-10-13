"use client";
import { useRef } from "react";

import { columns, holeRadius, padding, rows } from "~/constants/game-board";
import { calculateGridHolePosition } from "~/utils/calculateGridHolePosition";
import { generateGrid } from "~/utils/generateGrid";

import { ColumnMarker } from "../column-marker/column-marker";
import styles from "./game-board.module.css";

export default function GameBoard() {
  const boardContainerRef = useRef(null);

  return (
    <div className={styles.boardContainer} ref={boardContainerRef}>
      {/** board border is 3px thick, so shift the marker 3 px to the left */}
      <ColumnMarker
        additionalPadding={3}
        boardContainerRef={boardContainerRef}
        currentPlayerColor="var(--amber-300)"
      />
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

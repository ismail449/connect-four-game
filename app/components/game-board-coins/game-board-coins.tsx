import { useEffect, useState } from "react";

import { columns, holeRadius, padding, rows } from "~/constants/game-board";
import { calculateDistance } from "~/utils/calculateGridHolePosition";
import styles from "./game-board-coins.module.css";

type Coin = {
  cx: number;
  cy: number;
  fill: string;
  rowIndex: number;
};

type Props = {
  boardContainerRef: React.RefObject<HTMLElement | null>;
};

export const GameBoarCoins = ({ boardContainerRef }: Props) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    if (!boardContainerRef.current) return;
    const boardContainer = boardContainerRef.current;

    const board = boardContainer.getBoundingClientRect();
    const boardWidth = board.right - board.left;
    const columnWidth = boardWidth / columns;

    const handelAddCoin = (e: MouseEvent) => {
      const exactXPosition = e.clientX - board.left;

      let columnIndex = Math.floor(exactXPosition / columnWidth);

      if (columnIndex < 0) columnIndex = 0;
      if (columnIndex >= columns) columnIndex = columns - 1;

      const cx = calculateDistance(
        columnIndex,
        holeRadius,
        padding
      );
      if (exactXPosition > cx + holeRadius || exactXPosition < cx - holeRadius)
        return;
      const columnCoins = coins.filter(({ cx: coinCx }) => coinCx === cx);
      if (columnCoins.length >= rows) return;
      const rowIndex = rows - 1 - columnCoins.length;
      const cy = calculateDistance(
        rowIndex,
        holeRadius,
        padding
      );
      const newCoin: Coin = {
        cx,
        cy,
        fill: "#fd6687",
        rowIndex
      };
      setCoins([...coins, newCoin]);
    };
    boardContainer.addEventListener("click", handelAddCoin);

    return () => {
      boardContainer.removeEventListener("click", handelAddCoin);
    };
  }, [boardContainerRef, coins]);

  return (
    <>
      {coins.map(({ cx, cy, fill, rowIndex }) => (
        <circle
          style={
            {
              "--landing-y": cy,
              "--re-bounce-y": cy - ((rowIndex / 100) * cy),
              "--fall-duration": `${(rowIndex + 1) * 100}ms`
            } as React.CSSProperties
          }
          className={styles.coin} key={`${cx}-${cy}`} r={holeRadius} cx={cx} cy={cy} fill={fill} />
      ))}
    </>
  );
};

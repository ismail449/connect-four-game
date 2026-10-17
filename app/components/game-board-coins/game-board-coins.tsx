import { Fragment, useEffect, useState } from "react";

import { columns, holeRadius, padding, rows } from "~/constants/game-board";
import { calculateGridHolePosition } from "~/utils/calculateGridHolePosition";

type Coin = {
  cx: number;
  cy: number;
  fill: string;
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
    const boardHeight = board.bottom - board.top;
    const columnWidth = boardWidth / columns;
    const rowHeight = boardHeight / rows;

    const handelAddCoin = (e: MouseEvent) => {
      const exactXPosition = e.clientX - board.left;
      const exactYPosition = e.clientY - board.top;

      let columnIndex = Math.floor(exactXPosition / columnWidth);
      let rowIndex = Math.floor(exactYPosition / rowHeight);

      if (columnIndex < 0) columnIndex = 0;
      if (columnIndex >= columns) columnIndex = columns - 1;

      if (rowIndex < 0) rowIndex = 0;
      if (rowIndex >= rows) rowIndex = rows - 1;

      const [, cx] = calculateGridHolePosition(
        rowIndex,
        columnIndex,
        holeRadius,
        padding
      );
      if (exactXPosition > cx + holeRadius || exactXPosition < cx - holeRadius)
        return;
      const columnCoins = coins.filter(({ cx: coinCx }) => coinCx === cx);
      if (columnCoins.length >= rows) return;
      const [cy] = calculateGridHolePosition(
        rows - 1 - columnCoins.length,
        columnIndex,
        holeRadius,
        padding
      );
      const newCoin: Coin = {
        cx,
        cy,
        fill: "#fd6687",
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
      {coins.map(({ cx, cy, fill }) => (
        <Fragment key={`${cx}-${cy}`}>
          <circle r={holeRadius} cx={cx} cy={cy} fill={fill} />
        </Fragment>
      ))}
    </>
  );
};

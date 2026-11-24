import { useEffect, useState } from "react";

import HitSound from "~/assets/audio/hit sound.mp3";
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

function playHit(volume: number) {
  const hitSound = new Audio(HitSound)
  hitSound.volume = volume;
  hitSound.play();
}


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

  const onFallAnimationStart = (duration: number, volume: number) => {
    const soundPlayProperties = [{ duration: duration * (69 / 100), volume }, { duration, volume: volume / 2 }];
    for (const prop of soundPlayProperties) {
      setTimeout(() => playHit(prop.volume), prop.duration);
    }
  }

  return (
    <>
      <filter id="blurMe">
        <feOffset in="SourceAlpha" dy="5" result="shiftedInner" />
        <feComposite in="SourceAlpha" in2="shiftedInner" operator="out" result="inset" />
        <feComposite in="inset" operator="arithmetic" k2="0.7" result="softInset" />
        <feComposite in="softInset" in2="SourceGraphic" operator="over" />
      </filter>
      {coins.map(({ cx, cy, fill, rowIndex }) => {
        const fallDuration = (rowIndex + 1) * 100;
        const fallVolume = rowIndex / (rows - 1);
        return (
          <circle
            onAnimationStart={() => onFallAnimationStart(fallDuration, fallVolume)}
            style={
              {
                "--landing-y": cy,
                "--re-bounce-y": cy - ((rowIndex / 100) * cy),
                "--fall-duration": `${fallDuration}ms`
              } as React.CSSProperties
            }
            className={styles.coin} key={`${cx}-${cy}`} r={holeRadius} cx={cx} cy={cy} filter="url(#blurMe)" fill={fill} />
        )
      })}
    </>
  );
};

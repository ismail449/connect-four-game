"use client";

import { useEffect, useState } from "react";

import TickSound from "~/assets/audio/tick sound.mp3";
import Marker from "~/assets/icons/column-marker.svg?react";
import { columns, holeRadius, padding } from "~/constants/game-board";
import { calculateGridHolePosition } from "~/utils/calculateGridHolePosition";

import styles from "./column-marker.module.css";

type Props = {
  boardContainerRef: React.RefObject<HTMLElement | null>;
  currentPlayerColor: string;
  additionalPadding: number;
};

const markerWidth = 38;
const markerHeight = 36;

export const ColumnMarker = ({
  boardContainerRef,
  currentPlayerColor,
  additionalPadding = 0,
}: Props) => {
  const markerInitialPosition = 56 - markerWidth / 2 + additionalPadding;
  const [markerPosition, setMarkerPosition] = useState(markerInitialPosition);
  useEffect(() => {
    if (!boardContainerRef.current) return;
    const tickSound = new Audio(TickSound);

    const boardContainer = boardContainerRef.current;

    const trackMouseMovement = async (e: MouseEvent) => {
      const board = boardContainer.getBoundingClientRect();
      const boardWidth = board.right - board.left;
      const sectionWidth = boardWidth / columns;
      const exactXPosition = e.clientX - board.left;

      let columnIndex = Math.floor(exactXPosition / sectionWidth);

      if (columnIndex < 0) columnIndex = 0;
      if (columnIndex >= columns) columnIndex = columns - 1;

      const [, cx] = calculateGridHolePosition(
        0,
        columnIndex,
        holeRadius,
        padding
      );
      const nextMarkerPosition = cx + additionalPadding - markerWidth / 2;
      if (nextMarkerPosition === markerPosition) return;
      setMarkerPosition(nextMarkerPosition);
      tickSound.play();
    };
    boardContainer.addEventListener("mousemove", trackMouseMovement);

    return () => {
      boardContainer.removeEventListener("mousemove", trackMouseMovement);
    };
  }, [boardContainerRef, additionalPadding, markerPosition]);
  return (
    <Marker
      width={markerWidth}
      height={markerHeight}
      className={styles.marker}
      style={
        {
          "--player-color": currentPlayerColor,
          position: "absolute",
          top: "-36px",
          left: `${markerPosition}px`,
        } as React.CSSProperties
      }
    />
  );
};

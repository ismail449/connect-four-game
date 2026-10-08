const calculateDistance = (
  position: number,
  radius: number,
  padding: number
) => {
  return position * radius * 2 + radius + padding * position + padding;
};

export const calculateGridHolePosition = (
  row: number,
  col: number,
  radius: number,
  padding: number
) => {
  const rowPosition = calculateDistance(row, radius, padding);
  const colPosition = calculateDistance(col, radius, padding);

  return [rowPosition, colPosition];
};

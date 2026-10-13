const calculateDistance = (
  position: number,
  radius: number,
  padding: number
) => {
  return position * radius * 2 + radius + padding * position + padding;
};

export const calculateGridHolePosition = (
  row: number = 0,
  col: number = 0,
  radius: number = 0,
  padding: number = 0
) => {
  const rowPosition = calculateDistance(row, radius, padding);
  const colPosition = calculateDistance(col, radius, padding);

  return [rowPosition, colPosition];
};

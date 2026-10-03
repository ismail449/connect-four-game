export const generateUUID = () => {
  return crypto.randomUUID();
};

export const generateGrid = (columns: number, rows: number) => {
  return Array.from({ length: columns * rows }, generateUUID);
};

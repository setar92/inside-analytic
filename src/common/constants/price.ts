const gapsDistance: Array<Array<number>> = [
  [0, 3],
  [3, 6],
  [6, 9],
  [9, 12],
  [12, 15],
  [15, 30],
];

const gapsWeight = [2, 5, 10, 12];

const pricesB2C: Array<Array<number | string>> = [
  [4.5, 5.5, 6.5, 7.5, 8.75, 'Formula'],
  [4.75, 5.75, 6.75, 7.75, 9, 'Formula'],
  [5, 6, 7, 8, 9.25, 'Formula'],
  [5.25, 6.25, 7.25, 8.25, 9.5, 'Formula'],
];

const pricesC2C: Array<Array<number | string>> = [
  [5.5, 6.5, 7.5, 8.75, 9.75, 'Formula'],
  [5.75, 6.75, 7.75, 9, 9.95, 'Formula'],
  [6, 7, 7.85, 9.15, 10.15, 'Formula'],
  [6.15, 7.25, 7.95, 9.35, 10.25, 'Formula'],
];

export { gapsDistance, gapsWeight, pricesB2C, pricesC2C };

import { pricesB2C, pricesC2C } from '../common/constants';
const calculatePrice = (
  distance: number,
  weight: number,
  userType: number,
): number => {
  let price = 0;

  const dataForCarrentWeight = userType
    ? pricesB2C[weight - 1]
    : pricesC2C[weight - 1];

  if (distance < 3) {
    price = dataForCarrentWeight[0] as number;
  } else if (distance < 6) {
    price = dataForCarrentWeight[1] as number;
  } else if (distance < 9) {
    price = dataForCarrentWeight[2] as number;
  } else if (distance < 12) {
    price = dataForCarrentWeight[3] as number;
  } else if (distance < 15) {
    price = dataForCarrentWeight[4] as number;
  } else if (distance < 30) {
    userType
      ? (price = 0.1 * weight - 0.1 + 3.5 + 0.35 * distance)
      : (price = 0.1 * weight - 0.1 + 4.5 + 0.35 * distance);
  } else {
    price = 100;
  }
  return +price.toFixed(2);
};
export { calculatePrice };

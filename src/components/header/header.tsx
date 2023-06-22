import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../common/enums';

export const Header: FC = () => {
  const navigate = useNavigate();
  const navigateMapPageHandler = (): void => {
    navigate(AppRoute.MAP);
  };
  const navigatePricePageHandler = (): void => {
    navigate(AppRoute.PRICE);
  };
  const navigateCalculatorPageHandler = (): void => {
    navigate(AppRoute.CALCULATOR);
  };
  return (
    <header className="flex flex-row p-4 bg-orange-100 rounded-md shadow-md">
      <div
        className="mr-4 hover: cursor-pointer text-sky-900 text-xl hover:text-cyan-600"
        onClick={navigateMapPageHandler}
      >
        Main
      </div>
      <div
        className="mr-4 hover: cursor-pointer text-sky-900 text-xl hover:text-cyan-600"
        onClick={navigatePricePageHandler}
      >
        Price
      </div>
      <div
        className="mr-4 hover: cursor-pointer text-sky-900 text-xl hover:text-cyan-600"
        onClick={navigateCalculatorPageHandler}
      >
        Calculator
      </div>
    </header>
  );
};

import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { logoGorisontal } from '../../assets';
import { AppRoute } from '../../common/enums';

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    <header className="flex flex-row p-6 bg-white shadow-md font-semibold text-2xl text-main">
      <div className="ml-4 pt-2 ">
        <img src={logoGorisontal} alt="logo" />
      </div>
      <div
        className={`ml-8 cursor-pointer ${
          location.pathname === AppRoute.MAP ? 'text-primery' : null
        }`}
        onClick={navigateMapPageHandler}
      >
        Main
      </div>
      <div
        className={`ml-8 cursor-pointer ${
          location.pathname === AppRoute.PRICE ? 'text-primery' : null
        }`}
        onClick={navigatePricePageHandler}
      >
        Price
      </div>
      <div
        className={`ml-8 cursor-pointer ${
          location.pathname === AppRoute.CALCULATOR ? 'text-primery' : null
        }`}
        onClick={navigateCalculatorPageHandler}
      >
        Calculator
      </div>
    </header>
  );
};

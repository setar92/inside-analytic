import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../common/enums';

export const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <div onClick={(): void => navigate(AppRoute.MAP)}>Main</div>
        <div onClick={(): void => navigate(AppRoute.PRICE)}>Price</div>
        <div onClick={(): void => navigate(AppRoute.CALCULATOR)}>
          Calculator
        </div>
      </div>
    </header>
  );
};

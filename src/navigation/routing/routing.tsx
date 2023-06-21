import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../common/enums';
import { MapPage, PricePage } from '../../pages';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAP} element={<MapPage />} />
        <Route path={AppRoute.CALCULATOR} element={<PricePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };

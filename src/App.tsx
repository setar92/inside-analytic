import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { Routing } from './navigation/routing/routing';
import { store } from './store/store';

const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routing />
      </Provider>
    </React.StrictMode>
  );
};

export { App };

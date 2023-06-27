import { FC } from 'react';

import { CalculatorForm, Header } from '../components';

export const CalculatorPage: FC = () => {
  return (
    <div>
      <Header />
      <CalculatorForm />
    </div>
  );
};

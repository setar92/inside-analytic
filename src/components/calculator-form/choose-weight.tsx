import { FC } from 'react';

import { gapsWeight } from '../../common/constants';

interface ChooseWeightProps {
  setWeight: (e: number) => void;
  weight: number;
}

const ChooseWeight: FC<ChooseWeightProps> = ({ setWeight, weight }) => {
  return (
    <div className="flex flex-row mt-3">
      <div
        className={`w-20 h-9 rounded-md ${
          weight === 1 ? 'bg-primery' : 'bg-main'
        }  mr-3 cursor-pointer text-white flex justify-center items-center font-medium`}
        onClick={(): void => {
          setWeight(1);
        }}
      >
        <p>{`0-${gapsWeight[0]}kg`}</p>
      </div>
      <div
        className={`w-20 h-9 rounded-md ${
          weight === 2 ? 'bg-primery' : 'bg-main'
        }  mr-3 cursor-pointer text-white flex justify-center items-center font-medium`}
        onClick={(): void => {
          setWeight(2);
        }}
      >
        <p>{`${gapsWeight[0]}-${gapsWeight[1]}kg`}</p>
      </div>
      <div
        className={`w-20 h-9 rounded-md ${
          weight === 3 ? 'bg-primery' : 'bg-main'
        }  mr-3 cursor-pointer text-white flex justify-center items-center font-medium`}
        onClick={(): void => {
          setWeight(3);
        }}
      >
        <p>{`${gapsWeight[1]}-${gapsWeight[2]}kg`}</p>
      </div>
      <div
        className={`w-20 h-9 rounded-md ${
          weight === 4 ? 'bg-primery' : 'bg-main'
        }  cursor-pointer text-white flex justify-center items-center font-medium`}
        onClick={(): void => {
          setWeight(4);
        }}
      >
        <p>{`${gapsWeight[2]}-${gapsWeight[3]}kg`}</p>
      </div>
    </div>
  );
};

export { ChooseWeight };

import { FC, useState, useEffect } from 'react';

import { SSize, MSize, LSize, XSSize } from '../../assets';
import {
  gapsDistance,
  gapsWeight,
  pricesC2C,
  pricesB2C,
} from '../../common/constants';

const Price: FC = () => {
  const [userType, setUserType] = useState<'personal' | 'business'>('personal');
  const [pricesList, setPricesList] = useState(pricesC2C);
  useEffect(() => {
    if (userType === 'personal') {
      setPricesList(pricesC2C);
    } else {
      setPricesList(pricesB2C);
    }
  }, [userType]);

  function getSizeIcon(weight: number): string {
    switch (weight) {
      case 2:
        return XSSize;
      case 5:
        return SSize;
      case 10:
        return LSize;
      case 15:
        return MSize;
      default:
        return XSSize;
    }
  }

  return (
    <div>
      <div className="bg-grey w-[100wh] h-[100wv] flex justify-start items-start flex-col p-4 lg:p-3 font-semibold">
        <div className="flex w-full text-[58px] lg:text-[36px]">
          <div
            className={`w-[50%] rounded-l-2xl cursor-pointer py-5 text-center ${
              userType === 'personal'
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
            onClick={(): void => setUserType('personal')}
          >
            C2C
          </div>
          <div
            className={`w-[50%] rounded-r-xl cursor-pointer py-5 text-center ${
              userType === 'personal'
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }`}
            onClick={(): void => setUserType('business')}
          >
            B2C
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <table className="border-separate border-none border-spacing-3 w-[100%] pl-9 pr-1">
          <tbody>
            {gapsWeight.map((weight, indx) => {
              return (
                <tr key={weight}>
                  <td className="py-4 text-[36px] flex align-middle justify-left w-40 h-max">
                    <div className="h-14 w-14">
                      <img src={getSizeIcon(weight)} alt="logo" />
                    </div>
                    <div className="pl-6 whitespace-nowrap w-24 text-base font-semibold font-main my-auto">
                      <p className="py-auto">{`${String(weight)} kg max`}</p>
                    </div>
                  </td>
                  {pricesList[indx].map((price, indx) => (
                    <td
                      key={indx}
                      className="ml-3 mt-3 px-6 py-4 text-center rounded-xl bg-white min-w-[150px] lg:min-w-[100px] lg:px-4"
                    >
                      <p className="font-semibold text-primery text-4xl lg:text-2xl">
                        {price === 'Formula' ? 'Calc' : `${price}€`}
                      </p>
                      <p className="text-gray opacity-70 font-semibold text-xl lg:text-base">{`${gapsDistance[indx][0]}-${gapsDistance[indx][1]}km`}</p>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Price };

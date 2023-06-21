import { FC } from 'react';

import { gapsDistance, gapsWeight, pricesC2C, pricesB2C } from './data';

const Price: FC = () => {
  return (
    <div className="bg-white w-[100wh] h-[100wv] flex justify-start items-start flex-col m-4 p-4">
      <table className="border-2 border-separate border-orange-600 mb-4">
        <thead>
          <th className="text-center" colSpan={gapsDistance.length + 1}>
            Price В2С
          </th>
          <tr className="border border-orange-400">
            <th className="border border-orange-400"></th>
            {gapsDistance.map((distance) => (
              <th className="border border-orange-400 w-24">{`${distance[0]}-${distance[1]} km`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gapsWeight.map((weight, indx) => {
            return (
              <tr>
                <td className="border border-orange-400 p-1">{`up to ${String(
                  weight,
                )} kg`}</td>
                {pricesB2C[indx].map((price) => (
                  <td className="border border-orange-400 p-1 text-center hover:bg-orange-300">
                    {price}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="border-2 border-separate border-orange-600">
        <thead>
          <th className="text-center" colSpan={gapsDistance.length + 1}>
            Price C2С
          </th>
          <tr className="border border-orange-400">
            <th className="border border-orange-400"></th>
            {gapsDistance.map((distance) => (
              <th className="border border-orange-400 w-24">{`${distance[0]}-${distance[1]} km`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gapsWeight.map((weight, indx) => {
            return (
              <tr>
                <td className="border border-orange-400 p-1">{`up to ${String(
                  weight,
                )} kg`}</td>
                {pricesC2C[indx].map((price) => (
                  <td className="border border-orange-400 p-1 text-center hover:bg-orange-300">
                    {price}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Price };

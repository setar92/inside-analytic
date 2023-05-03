import { FC } from 'react';

import { locationIcon } from '../../assets';
import { CommonLocation } from '../../common/types';

interface AdditionalInfoProps {
  hideInformation: () => void;
  location: CommonLocation;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  hideInformation,
  location,
}) => {
  return (
    <div
      className="text-[14px] pb-2 text-dark font-bold absolute z-10 bg-amber-100 p-4 border-orange-600 rounded-lg border-2"
      style={{
        top: '15%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        {location.img && (
          <div className="mt-40">
            <img src={require('./stokker.jpg')} width={400} />
          </div>
        )}
        <div
          className="flex justify-end absolute top-[-12px] right-[-10px]"
          onClick={hideInformation}
        >
          <div className=" cursor-pointer">x</div>
        </div>
        <div className="flex">
          <img src={locationIcon} alt="locationIcon" />
          <p className="ml-2">{location?.name}</p>
        </div>
        <div>
          <p className="ml-2">{location?.address}</p>
        </div>
        <div>
          <p className="ml-2 text-amber-800 font-bold">
            Owner: {location?.owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export { AdditionalInfo };

import { FC } from 'react';

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
    <div className="right-auto justify-center ">
      <div className="absolute top-4 left-0 text-[14px] w-[100vw] text-dark font-bold z-10 flex justify-center align-middle flex-col">
        <div className="flex items-center flex-col ">
          <div
            className="bg-white p-4 rounded-2xl relative max-w-[400px]"
            onClick={hideInformation}
          >
            <div>
              <p className="ml-2 text-lg font-semibold">{location?.address}</p>
            </div>
            <div>
              <p className="ml-2 text-primery font-semibold text-xs">
                Owner: {location?.owner}
              </p>
            </div>
            <div className="flex justify-center">
              {location.img && (
                <div
                  className=""
                  style={{
                    top: '20%',
                  }}
                >
                  <img src={require('./stokker.jpg')} width={400} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdditionalInfo };

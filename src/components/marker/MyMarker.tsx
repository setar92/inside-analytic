import { FC } from 'react';

import { MarkerF } from '@react-google-maps/api';

import { ICoordinates, CommonLocation } from '../../common/types';

interface MyMarkerProps {
  position: ICoordinates;
  onClick: (location: CommonLocation) => void;
  allInfo: CommonLocation;
  iconUrl?: string;
}

const MyMarker: FC<MyMarkerProps> = ({
  position,
  onClick,
  allInfo,
  iconUrl,
}) => {
  return iconUrl ? (
    <MarkerF
      position={position}
      onClick={(): void => onClick(allInfo)}
      icon={{
        url: `${iconUrl}`,
      }}
    />
  ) : (
    <MarkerF position={position} onClick={(): void => onClick(allInfo)} />
  );
};

export { MyMarker };

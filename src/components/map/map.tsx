import { FC, useState, useEffect } from 'react';
import uuid from 'react-uuid';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { MyMarker } from '..';
import { allLocationsData, libraries } from '../../common/constants';
import {
  ICoordinates,
  CommonLocation,
  IAllLocationsData,
} from '../../common/types';
import { filterData } from '../../helpers/filter-logic';
import { commonNationalPost } from '../../helpers/locations-dto';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { defaultOptions } from './options';

interface MapInterface {
  showData: (location: CommonLocation) => void;
}

const Map: FC<MapInterface> = ({ showData }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });

  const [allLocations, setAllLocations] = useState<IAllLocationsData[]>([]);
  const [position, setPosition] = useState<ICoordinates>({
    lat: commonNationalPost[0].latitude,
    lng: commonNationalPost[0].longitude,
  });
  const filterCriterions = useAppSelector((state) => state.filter);

  useEffect(() => {
    const locationsData = filterData(allLocationsData, filterCriterions);
    setAllLocations(locationsData);
  }, [filterCriterions]);
  const choosePostMachineHandler = (location: CommonLocation): void => {
    showData(location);
    setPosition({
      lat: location.latitude,
      lng: location.longitude,
    });
  };

  if (!isLoaded) {
    return <div>Map is loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerClassName="w-[100vw] h-[89vh]"
        center={position}
        zoom={10}
        options={defaultOptions}
      >
        {allLocations.map((locationData) => {
          return locationData.data.map((loc) => {
            return (
              <MyMarker
                key={uuid()}
                position={{ lat: loc.latitude, lng: loc.longitude }}
                onClick={choosePostMachineHandler}
                allInfo={loc}
                iconUrl={locationData.marker}
              />
            );
          });
        })}
      </GoogleMap>
    </div>
  );
};

export { Map };

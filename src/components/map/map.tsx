import { FC, useCallback, useRef, useState, useEffect } from 'react';
import uuid from 'react-uuid';

import { GoogleMap } from '@react-google-maps/api';

import { MyMarker } from '..';
import { allLocationsData } from '../../common/constants';
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

  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((_: google.maps.Map) => {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerClassName="w-[80vw] h-[90vh] rounded-lg "
        center={position}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {allLocations.map((locationData) => {
          return locationData.data.map((loc) => (
            <MyMarker
              key={uuid()}
              position={{ lat: loc.latitude, lng: loc.longitude }}
              onClick={choosePostMachineHandler}
              allInfo={loc}
              iconUrl={locationData.marker}
            />
          ));
        })}
      </GoogleMap>
    </div>
  );
};

export { Map };

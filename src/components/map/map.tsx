import { FC, useCallback, useRef, useState, useEffect } from 'react';

import { GoogleMap } from '@react-google-maps/api';

import { MyMarker } from '..';
import { ICoordinates, generalLocation } from '../../common/types';
import { useAppSelector } from '../../hooks/store/store.hooks';
import {
  nationalPostData1,
  nationalPostData2,
  locationsOmniva,
  venipakData,
} from '../../mock-data';
import { defaultOptions } from './options';

//Choose just pacomats
const natPostMachines = [...nationalPostData1, ...nationalPostData2].filter(
  (loc) => loc.tmpCategory === 5,
);
const omnivaLatviaPacomats = locationsOmniva.filter((loc) => loc.TYPE === '0');

interface MapInterface {
  showData: (location: generalLocation) => void;
}

const Map: FC<MapInterface> = ({ showData }) => {
  const [nationalPostData, setNationalPostData] = useState(natPostMachines);
  const [omnivaData, setOmnivaData] = useState(omnivaLatviaPacomats);
  const [venipakLocData, setVenipakData] = useState(venipakData);
  const [position, setPosition] = useState<ICoordinates>({
    lat: natPostMachines[0].tmpLat,
    lng: natPostMachines[0].tmpLong,
  });
  const showsPostMachines = useAppSelector((state) => state.filter);

  const chooseOwnerHandler = (location: generalLocation): void => {
    showData(location);
    setPosition({
      lat: location.lat,
      lng: location.ltn,
    });
  };

  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((_: google.maps.Map) => {
    mapRef.current = undefined;
  }, []);

  useEffect(() => {
    const nationalRiga = natPostMachines.filter(
      (location) =>
        location.tmpDistrict === 'Rīga' || location.tmpDistrict === 'Jūrmala',
    );
    setNationalPostData([...nationalRiga]);
    const omnivaRiga = omnivaData.filter(
      (location) => location.A1_NIMI === 'Rīga',
    );
    setOmnivaData([...omnivaRiga]);

    const venipakRiga = venipakData.filter(
      (location) => location.city === 'R\u012bga',
    );
    setVenipakData([...venipakRiga]);
  }, []);

  useEffect(() => {
    if (showsPostMachines.justRiga) {
      const nationalRiga = natPostMachines.filter(
        (location) =>
          location.tmpDistrict === 'Rīga' || location.tmpDistrict === 'Jūrmala',
      );
      setNationalPostData([...nationalRiga]);

      const omnivaRiga = omnivaLatviaPacomats.filter(
        (location) =>
          location.A1_NIMI === 'Rīga' || location.A1_NIMI === 'Jūrmala',
      );
      setOmnivaData([...omnivaRiga]);

      const venipakRiga = venipakData.filter(
        (location) => location.city === 'R\u012bga',
      );
      setVenipakData([...venipakRiga]);
    }
    if (showsPostMachines.justLatvia) {
      const venipakLatvia = venipakData.filter(
        (location) => location.country === 'LV',
      );
      setVenipakData([...venipakLatvia]);
      setNationalPostData([...natPostMachines]);
      const omnivaLatvia = omnivaLatviaPacomats.filter(
        (location) => location.country_id === 'LV',
      );
      setOmnivaData([...omnivaLatvia]);
    }
    if (showsPostMachines.allLocations) {
      setNationalPostData([...natPostMachines]);
      setOmnivaData([...omnivaLatviaPacomats]);
      setVenipakData([...venipakData]);
    }
  }, [showsPostMachines]);

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
        {showsPostMachines.showNational &&
          nationalPostData.map((loc, id) => (
            <MyMarker
              key={id}
              position={{ lat: loc.tmpLat, lng: loc.tmpLong }}
              onClick={chooseOwnerHandler}
              allInfo={{
                name: loc.tmpName,
                adress: loc.tmpAddress,
                lat: loc.tmpLat,
                ltn: loc.tmpLong,
                owner: 'national',
              }}
            />
          ))}
        {showsPostMachines.showOmniva &&
          omnivaData.map((loc, id) => (
            <MyMarker
              key={id}
              position={{ lat: +loc.lat, lng: +loc.lng }}
              onClick={chooseOwnerHandler}
              allInfo={{
                name: loc.NAME,
                adress: loc.A1_NIMI || String(loc.A2_NIMI),
                lat: +loc.lat,
                ltn: +loc.lng,
                owner: 'omniva',
              }}
              iconUrl="sasi.webp"
            />
          ))}
        {showsPostMachines.showVenipak &&
          venipakLocData.map((loc, id) => (
            <MyMarker
              key={id}
              position={{ lat: +loc.lat, lng: +loc.lng }}
              onClick={chooseOwnerHandler}
              allInfo={{
                name: loc.name,
                adress: loc.address,
                lat: +loc.lat,
                ltn: +loc.lng,
                owner: 'venipak',
              }}
              iconUrl="VenipakMarket.svg"
            />
          ))}
      </GoogleMap>
    </div>
  );
};

export { Map };

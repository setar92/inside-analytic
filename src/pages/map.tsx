import { FC, useState } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';

import { generalLocation } from '../common/types';
import { Loader, Map, AdditionalInfo, Filter } from '../components';

const MapPage: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
  });
  const [location, setLocation] = useState<generalLocation>();

  const hideInformation = (): void => {
    setLocation({ adress: '', lat: 0, ltn: 0, name: '', owner: 'national' });
  };

  return (
    <div className="bg-white w-[100wh] h-[100wv] flex justify-start items-start flex-row m-4">
      {location?.adress && (
        <AdditionalInfo hideInformation={hideInformation} location={location} />
      )}
      {isLoaded ? <Map showData={setLocation} /> : <Loader />}
      <Filter />
    </div>
  );
};

export { MapPage };

import { FC, useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import uuid from 'react-uuid';

import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from '@react-google-maps/api';

import { allLocationsData, libraries } from '../../common/constants';
import { CommonLocation, IAllLocationsData } from '../../common/types';
import { MyMarker } from '../../components/marker/MyMarker';
import { calculatePrice } from '../../helpers';
import { filterData } from '../../helpers/filter-logic';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { defaultOptions } from '../map/options';
import { ChooseWeight } from './choose-weight';

const center = { lat: 56.940763, lng: 24.138074 };

const CalculatorForm: FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });

  const [allLocations, setAllLocations] = useState<IAllLocationsData[]>([]);

  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('');
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [price, setPrice] = useState<number | string>(0);
  const [weight, setWeight] = useState<number>(1);

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP as string);
  Geocode.setLanguage('en');
  Geocode.setRegion('es');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug();

  const filterCriterions = useAppSelector((state) => state.filter);
  const geocodeFunction = async function (
    location: CommonLocation,
  ): Promise<string> {
    const response = await Geocode.fromLatLng(
      String(location.latitude),
      String(location.longitude),
    );
    const adress = response.results[0].formatted_address;
    return adress;
  };

  useEffect(() => {
    const locationsData = filterData(allLocationsData, filterCriterions);
    setAllLocations(locationsData);
  }, [filterCriterions]);

  useEffect(() => {
    if (distance) {
      const distanceNumber = +distance
        .replace('км', '')
        .replace(' ', '')
        .replace(',', '.');
      const prise = calculatePrice(distanceNumber, weight as number);
      prise === 100
        ? setPrice('The distance should not exceed 30 km!')
        : setPrice(prise);
    }
  }, [distance, weight]);
  const choosePostMachineHandler = async (
    location: CommonLocation,
  ): Promise<void> => {
    const adress = await geocodeFunction(location);
    if (destination) {
      clearRoute();
    }
    if (!origin) {
      setOrigin(adress);
    } else if (!destination) {
      setDestination(adress);
    }
    if (destination) {
      setOrigin(adress);
      setDestination('');
    }
  };

  async function calculateRoute(): Promise<void> {
    if (origin === '' || destination === '') {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(() => null);
    setDirectionsResponse(() => results);
    results &&
      results.routes[0] &&
      results.routes[0].legs[0] &&
      results.routes[0].legs[0].distance &&
      setDistance(results?.routes[0]?.legs[0]?.distance.text);
  }

  function clearRoute(): void {
    setDirectionsResponse(null);
    setDistance('');
    setOrigin('');
    setDestination('');
    setPrice(0);
  }

  if (!isLoaded) {
    return <div>Map loading</div>;
  }
  return (
    <div className="h-full w-full relative">
      <div className="w-[100%]">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '650px' }}
          options={defaultOptions}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
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
      <div className="absolute p-4 rounded-xl m-2 bg-white shadow-sm w-[350px] ml-auto mr-auto z-10 top-4 left-4 flex flex-col">
        <div>
          <input
            type="text"
            name="origin"
            placeholder="Select departure point on map"
            className="bg-grey px-3 py-2 rounded-md text-sm font-semibold w-[318px]"
            value={origin}
          />
          <input
            type="text"
            name="destination"
            placeholder="Select arrival point on map"
            className="bg-grey px-3 py-2 rounded-md text-sm font-semibold w-[318px] mt-3"
            value={destination}
          />
        </div>
        <ChooseWeight setWeight={setWeight} weight={weight} />

        <div className="flex flex-row">
          <div className="w-[154px]  bg-grey rounded-md font-medium px-3 py-2 mt-3 mr-3">
            <p>Distance:</p>
            <p
              className={`mt-[-5px]  ${
                distance ? 'text-primery' : 'text-main'
              }`}
            >
              {distance ? `${distance}` : '...'}
            </p>
          </div>
          <div className="w-[154px]  bg-grey rounded-md font-medium px-3 py-2 mt-3">
            <p>Price:</p>
            <p
              className={`mt-[-5px]  ${
                distance ? 'text-primery' : 'text-main'
              }`}
            >
              {price ? `${price}€` : '...'}
            </p>
          </div>
        </div>
        <div
          className="max-w bg-primery text-2xl font-semibold text-white rounded-md text-center py-2 mt-3 cursor-pointer"
          onClick={calculateRoute}
        >
          Calculate
        </div>
      </div>
    </div>
  );
};

export { CalculatorForm };

import { FC, useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import uuid from 'react-uuid';

import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from '@react-google-maps/api';

import { allLocationsData } from '../../common/constants';
import { CommonLocation, IAllLocationsData } from '../../common/types';
import { MyMarker } from '../../components/marker/MyMarker';
import { filterData } from '../../helpers/filter-logic';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { defaultOptions } from '../map/options';

const center = { lat: 56.940763, lng: 24.138074 };

const CalculatorForm: FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries: ['places'],
  });

  const [allLocations, setAllLocations] = useState<IAllLocationsData[]>([]);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

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

  const choosePostMachineHandler = async (
    location: CommonLocation,
  ): Promise<void> => {
    const adress = await geocodeFunction(location);
    if (destination) {
      setOrigin('');
      setDestination('');
    }
    if (!origin) {
      setOrigin(adress);
    } else {
      setDestination(adress);
    }
  };

  async function calculateRoute(): Promise<void> {
    if (origin && destination) {
      if (origin === '' || destination === '') {
        return;
      }
    }
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    // setOrigin('');
    // setDestination('');
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: origin,
      destination: destination,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    results &&
      results.routes[0] &&
      results.routes[0].legs[0] &&
      results.routes[0].legs[0].distance &&
      setDistance(results?.routes[0]?.legs[0]?.distance.text);
    results &&
      results.routes[0] &&
      results.routes[0].legs[0] &&
      results.routes[0].legs[0].duration &&
      setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute(): void {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setOrigin('');
    setDestination('');
  }

  if (!isLoaded) {
    return <div>Hi</div>;
  }
  return (
    <Flex className="relative flex-col align-middle h-full w-full mt-5 justify-center">
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '650px' }}
          options={defaultOptions}
          onLoad={(map): void => setMap(map)}
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
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <div className="p-4 rounded-xl m-2 bg-white shadow-sm w-[80%] ml-auto mr-auto z-10">
        <div className="flex flex-row w-[100%]">
          <div className="text-sm p-2 rounded-md w-[40%]">
            <input type="text" placeholder="Origin" value={origin} />
          </div>
          <div className="mr-2 text-sm p-2 rounded-md w-[40%]">
            <input type="text" placeholder="Destination" value={destination} />

            {destination}
          </div>
          <div className="w-[20%] relative flex justify-end">
            <div className="mr-2">
              <Button
                className="border-2 border-neutral-900 rounded-md p-2 bg-cyan-900 text-cyan-50 font-bold"
                colorScheme="pink"
                type="submit"
                onClick={calculateRoute}
              >
                Calculate
              </Button>
            </div>
            <div className="relative">
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
                className="top-0 right-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[100%]">
          <div className="text-sm p-2 rounded-md w-[40%]">
            Distance: {distance}
          </div>
          <div className="mr-2 text-sm p-2 rounded-md w-[40%]">
            Duration: {duration}
          </div>
          <div className="relative w-[20%] flex justify-end">
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={(): void => {
                map && map.panTo(center);
                map && map.setZoom(15);
              }}
            />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export { CalculatorForm };

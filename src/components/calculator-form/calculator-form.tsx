import { FC, useState, useRef, useEffect } from 'react';
import Geocode from 'react-geocode';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import uuid from 'react-uuid';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
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

  const originRef = useRef<HTMLInputElement>(null);
  const destiantionRef = useRef<HTMLInputElement>(null);
  const [allLocations, setAllLocations] = useState<IAllLocationsData[]>([]);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP as string);
  Geocode.setLanguage('en');
  Geocode.setRegion('es');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug();

  const filterCriterions = useAppSelector((state) => state.filter);
  const geocodeFunction = async function (): Promise<void> {
    const response = await Geocode.fromLatLng(
      String(center.lat),
      String(center.lng),
    );
    console.log(
      response.results[0].formatted_address,
      'response.results[0].formatted_address',
    );
  };
  geocodeFunction();

  useEffect(() => {
    const locationsData = filterData(allLocationsData, filterCriterions);
    setAllLocations(locationsData);
  }, [filterCriterions]);

  const choosePostMachineHandler = (location: CommonLocation): void => {
    // showData(location);
    // setPosition({
    //   lat: location.latitude,
    //   lng: location.longitude,
    // });
    console.log(location, 'location');
  };

  async function calculateRoute(): Promise<void> {
    if (originRef.current?.value && destiantionRef.current?.value) {
      if (
        originRef.current.value === '' ||
        destiantionRef.current.value === ''
      ) {
        return;
      }
    }
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current!.value,
      destination: destiantionRef.current!.value,
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
    originRef.current!.value = '';
    destiantionRef.current!.value = '';
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
              console.log(
                { lat: loc.latitude, lng: loc.longitude },
                'we are hea',
              );
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
      <Box
        className="p-4 rounded-xl m-2 bg-white shadow-sm w-[60%] ml-auto mr-auto"
        zIndex="1"
      >
        <HStack spacing={2} justifyContent="space-between">
          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={(): void => {
              map && map.panTo(center);
              map && map.setZoom(15);
            }}
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export { CalculatorForm };

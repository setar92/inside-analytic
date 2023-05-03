import { CommonLocation } from '../common/types';
import {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
  locationsuDrop,
  infoDPD,
  locationsDPD,
  locationLVPost,
} from '../mock-data';
import {
  mapNationalPostLocation,
  mapOmnivaLocation,
  mapVenipakLocation,
  mapDataToCommonLocation,
  mapDPDLocation,
  mapLVPostLocation,
} from './convert-locations-data';

const commonNationalPost = locationsNationalPost
  .filter((loc) => loc.tmpCategory === 5)
  .map((loc) => mapNationalPostLocation(loc));
const commonOmnivaPost = locationsOmniva
  .filter((loc) => loc.TYPE === '0')
  .map((loc) => mapOmnivaLocation(loc));
const commonVenipakPost = locationsVenipak.map((loc) =>
  mapVenipakLocation(loc),
);
const commonuDropPost = locationsuDrop.map((loc) =>
  mapDataToCommonLocation(loc),
);

const commonDPDPost = locationsDPD.map((loc) => mapDPDLocation(loc, infoDPD));
const commonStokker: CommonLocation[] = [
  {
    address: 'Krasta iela 42, Latgales priekšpilsēta, Rīga, LV-1003, Латвія',
    city: ['Rīga'],
    country: 'LV',
    iconUrl: 's.svg',
    latitude: 56.935571804128486,
    longitude: 24.139749741575724,
    name: 'Stokker',
    owner: 'Stokker',
    img: 'stokker.jpg',
  },
];
const commonLVPost: CommonLocation[] = locationLVPost.map((loc) =>
  mapLVPostLocation(loc),
);

export {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
  commonuDropPost,
  commonDPDPost,
  commonStokker,
  commonLVPost,
};

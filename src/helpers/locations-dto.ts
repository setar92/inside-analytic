import {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
  locationsuDrop,
  infoDPD,
  locationsDPD,
} from '../mock-data';
import {
  mapNationalPostLocation,
  mapOmnivaLocation,
  mapVenipakLocation,
  mapDataToCommonLocation,
  mapDPDLocation,
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

export {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
  commonuDropPost,
  commonDPDPost,
};

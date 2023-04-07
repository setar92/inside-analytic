import {
  locationsNationalPost,
  locationsOmniva,
  locationsVenipak,
} from '../mock-data';
import {
  mapNationalPostLocation,
  mapOmnivaLocation,
  mapVenipakLocation,
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

export { commonNationalPost, commonOmnivaPost, commonVenipakPost };

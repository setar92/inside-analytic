import {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
} from '../../helpers/locations-dto';
import { IAllLocationsData } from '../types';

const cities = [
  ['All', 'All'],
  ['Riga', 'Rīga'],
  ['Jurmala', 'Jūrmala'],
  ['Tallinn', 'Tallinn'],
  ['Vilnius', 'Vilnius'],
  ['Kaunas', 'Kaunas'],
  ['Klaipeda', 'Klaip\u0117da'],
];
const countries = [
  ['All', 'All'],
  ['Latvia', 'LV'],
  ['Estonia', 'EE'],
  ['Lithuania', 'LT'],
];

const allLocationsData: IAllLocationsData[] = [
  {
    ownerName: 'National Post',
    marker: 'national-post.svg',
    data: commonNationalPost,
  },
  { ownerName: 'Omniva', marker: 'Omniva.webp', data: commonOmnivaPost },
  {
    ownerName: 'Venipak',
    marker: 'VenipakMarket.svg',
    data: commonVenipakPost,
  },
];

export { cities, countries, allLocationsData };

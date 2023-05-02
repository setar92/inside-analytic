import {
  commonNationalPost,
  commonOmnivaPost,
  commonVenipakPost,
  commonuDropPost,
  commonDPDPost,
  commonStokker,
  commonLVPost,
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
  ['Daugavpils', 'Daugavpils'],
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
  { ownerName: 'uDrop', marker: 'uDrop.svg', data: commonuDropPost },
  { ownerName: 'DPD', marker: 'dpd.png', data: commonDPDPost },
  { ownerName: 'Stokker', marker: 'stokker.svg', data: commonStokker },
  { ownerName: 'LT-post', marker: 'LT-post.svg', data: commonLVPost },
];

export { cities, countries, allLocationsData };

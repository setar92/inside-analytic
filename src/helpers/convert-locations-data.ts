import {
  CommonLocation,
  NationalPostlocation,
  OmnivaLocation,
  VenipakLocation,
} from '../common/types';

function mapNationalPostLocation(
  location: NationalPostlocation,
): CommonLocation {
  return {
    name: location.tmpName,
    latitude: location.tmpLat,
    longitude: location.tmpLong,
    country: 'LV',
    iconUrl: 'national-post.svg',
    owner: 'National',
    adress: location.tmpAddress,
    city: [location.tmpDistrict],
  };
}

function mapOmnivaLocation(location: OmnivaLocation): CommonLocation {
  let city = 'null';
  if (location.town === 'Vilniaus m.') {
    city = 'Vilnius';
  }
  if (location.town === 'Kauno m.') {
    city = 'Kaunas';
  }
  if (location.town === 'Klaipėdos m.') {
    city = 'Klaip\u0117da';
  }

  return {
    name: location.NAME,
    latitude: parseFloat(location.Y_KOORDINAAT),
    longitude: parseFloat(location.X_KOORDINAAT),
    country: location.country_id,
    iconUrl: 'sasi.webp',
    owner: 'Omniva',
    adress: location.title,
    city: [location.A1_NIMI, location.A2_NIMI, city],
  };
}

function mapVenipakLocation(location: VenipakLocation): CommonLocation {
  return {
    name: location.name,
    latitude: parseFloat(location.lat),
    longitude: parseFloat(location.lng),
    country: location.country,
    iconUrl: 'VenipakMarket.svg',
    owner: 'Venipak',
    adress: location.address,
    city: [location.city],
  };
}

export { mapNationalPostLocation, mapOmnivaLocation, mapVenipakLocation };

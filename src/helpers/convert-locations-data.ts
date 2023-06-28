import {
  CommonLocation,
  DPDLocationCoordinate,
  DpDLocationInformation,
  NationalPostlocation,
  OmnivaLocation,
  VenipakLocation,
  uDropLocation,
  LVPostLocation,
  // GlsLocation,
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
    address: location.tmpAddress,
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
    address: location.title,
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
    address: location.address,
    city: [location.city],
  };
}

function mapDPDLocation(
  location: DPDLocationCoordinate,
  info: DpDLocationInformation[],
): CommonLocation {
  const dpdLocationInfo = info.find(
    (info) => info.id === location.id,
  ) as DpDLocationInformation;
  let city = 'null';

  if (dpdLocationInfo.address.city === 'RĪGA') {
    city = 'Rīga';
  }
  if (dpdLocationInfo.address.city === 'JŪRMALA') {
    city = 'Jūrmala';
  }
  if (dpdLocationInfo.address.city === 'TALLINN') {
    city = 'Tallinn';
  }
  if (dpdLocationInfo.address.city === 'KAUNAS') {
    city = 'Kaunas';
  }
  if (dpdLocationInfo.address.city === 'KLAIPĖDA') {
    city = 'Klaip\u0117da';
  }
  if (dpdLocationInfo.address.city === 'VILNIUS') {
    city = 'Vilnius';
  }
  return {
    name: dpdLocationInfo.name,
    latitude: location.latLng[0],
    longitude: location.latLng[1],
    country: dpdLocationInfo.address.country,
    iconUrl: 'dpd.png',
    owner: 'DPD',
    address: dpdLocationInfo.address.streetName,
    city: [dpdLocationInfo.address.city, city],
  };
}

function mapDataToCommonLocation(data: uDropLocation): CommonLocation {
  const name = String(data.id);
  const address = 'Latvia';

  const commonLocation: CommonLocation = {
    latitude: data.lat,
    longitude: data.lng,
    name,
    address,
    owner: 'uDrop',
    city: [data.city],
    country: data.country,
    iconUrl: 'uDrop.svg',
  };
  return commonLocation;
}

function mapLVPostLocation(data: LVPostLocation): CommonLocation {
  const commonLocation: CommonLocation = {
    latitude: +data.map.latitude,
    longitude: +data.map.longitude,
    name: data.name,
    address: data.addressText,
    owner: 'LT-post',
    city: [data.addressDetails.settlementName],
    country: data.addressDetails.countryCode,
    iconUrl: 'uDrop.svg',
  };

  return commonLocation;
}

export {
  mapNationalPostLocation,
  mapOmnivaLocation,
  mapVenipakLocation,
  mapDataToCommonLocation,
  mapDPDLocation,
  mapLVPostLocation,
};

type Owner = 'Omniva' | 'National' | 'Venipak' | 'uDrop' | 'DPD';
interface NationalPostlocation {
  tmpLat: number;
  tmpLong: number;
  tmpName: string;
  tmpNameFull: string;
  tmpAddress: string;
  tmpCategory: number;
  tmpDistrict: string;
  tmpPhone: null | string;
  tmpService: string;
  tmpImage?: null | string;
  tmpWork: string | null;
  tmpPayment: null | string;
  tmpFilterOut: boolean;
  tmpMarker?: null | string;
  tmpInfo: null | string;
}

interface OmnivaLocation {
  id: string;
  ZIP: string;
  NAME: string;
  TYPE: string;
  A1_NIMI: string | null;
  A2_NIMI: string | null;
  A3_NIMI: string | null;
  A4_NIMI: string | null;
  A5_NIMI: string | null;
  A6_NIMI: string | null;
  A7_NIMI: string | null;
  A8_NIMI: string | null;
  X_KOORDINAAT: string;
  Y_KOORDINAAT: string;
  SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS: string;
  TEMP_SERVICE_HOURS_UNTIL: string | null;
  TEMP_SERVICE_HOURS_2: string;
  TEMP_SERVICE_HOURS_2_UNTIL: string | null;
  MODIFIED: string;
  comments: string;
  picture: string;
  import_type: string;
  country_id: string;
  type_id: string;
  comment_est: string;
  comment_rus: string;
  comment_eng: string;
  comment_lav: string;
  comment_lit: string;
  SERVICEPOINT_OVERLOAD: string;
  is_new_pm: string;
  title: string;
  town: string;
  lng: string;
  lat: string;
  description: string;
  type_array: string;
  long_waiting: boolean;
  real_type: string;
}

interface VenipakLocation {
  id: number;
  name: string;
  code: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  terminal: string;
  display_name: string;
  description: string | null;
  working_hours: string;
  contact_t: string;
  lat: string;
  lng: string;
  pick_up_enabled: number;
  cod_enabled: number;
  ldg_enabled: number;
  size_limit: number;
  type: number;
  max_height: number;
  max_width: number;
  max_length: number;
}

interface CommonLocation {
  name: string;
  latitude: number;
  longitude: number;
  city: Array<string | null>;
  country: string;
  owner: Owner;
  iconUrl: string;
  address: string;
}

interface uDropLocation {
  id: string;
  base: number[];
  zrange: number[];
  layer: string;
  features: Array<Feature>;
}

interface Feature {
  id: string;
  a: number[];
  bb: number[];
  c: string;
}

interface IAllLocationsData {
  ownerName: string;
  marker: string;
  data: CommonLocation[];
}

export type {
  CommonLocation,
  NationalPostlocation,
  OmnivaLocation,
  VenipakLocation,
  Owner,
  IAllLocationsData,
  uDropLocation,
};

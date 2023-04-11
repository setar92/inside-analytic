interface Address {
  streetName: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  country: string;
  doorCode: string | null;
}

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

interface TimeInterval {
  from: Time;
  to: Time;
}

interface BusinessHours {
  MONDAY: TimeInterval[] | undefined;
  TUESDAY: TimeInterval[] | undefined;
  WEDNESDAY: TimeInterval[] | undefined;
  THURSDAY: TimeInterval[] | undefined;
  FRIDAY: TimeInterval[] | undefined;
  SATURDAY?: TimeInterval[] | undefined;
  SUNDAY?: TimeInterval[] | undefined;
}

interface Position {
  lat: number;
  lon: number;
}

interface DpDLocationInformation {
  id: string;
  pudoType: number;
  name: string;
  address: Address;
  position: Position;
  favorite: boolean;
  distance: number;
  businessHours: BusinessHours;
  holidays: never[];
  servicePudo: never[];
  contactUs: null;
  additionalInfo: null;
}

interface DPDLocationCoordinate {
  latLng: number[];
  id: string;
  pudoType: number;
  options: {
    icon: string;
    clickable: boolean;
    tooltip: string | null;
  };
  distance: number;
}

export type { DpDLocationInformation, DPDLocationCoordinate };

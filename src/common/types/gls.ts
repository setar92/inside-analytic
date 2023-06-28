interface GlsLocation {
  id: string;
  name: string;
  contact: {
    countryCode: string;
    postalCode: string;
    city: string;
    address: string;
    name: string;
    email: string;
  };
  location: [number, number];
  hours: [number, string, string][];
  features: string[];
  holiday: {
    start: string;
    end: string;
  };
  pickupTime: string;
  type: string;
  groupMemberId: number;
}

export type { GlsLocation };

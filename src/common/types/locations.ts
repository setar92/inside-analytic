interface generalLocation {
  name: string;
  adress: string;
  lat: number;
  ltn: number;
  owner: 'omniva' | 'national' | 'venipak';
}

export { type generalLocation };

type FilterState = {
  owners: string[];
  cities: string[];
  countries: string[];
};

interface SetOwnerAction {
  type: string;
  payload: {
    owner: string;
    turn: boolean;
  };
}

interface SetCityAction {
  type: string;
  payload: {
    city: string;
    turn: boolean;
  };
}

interface SetCountryAction {
  type: string;
  payload: {
    country: string;
    turn: boolean;
  };
}

export type { FilterState, SetOwnerAction, SetCityAction, SetCountryAction };

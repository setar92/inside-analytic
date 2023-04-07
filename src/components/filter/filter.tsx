import { ChangeEvent, FC } from 'react';

import {
  cities,
  countries,
  allLocationsData,
} from '../../common/constants/filter-constants';
import { useAppDispatch, useAppSelector } from '../../hooks/store/store.hooks';
import { setOwner, setCity, setCountry } from '../../store/filter/slice';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filterCriterions = useAppSelector((state) => state.filter);

  const chooseOwnerHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const owner = event.target.name;
    const turn = event.target.checked;
    dispatch(setOwner({ owner, turn }));
  };
  const chooseCityHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const city = event.target.name;
    const turn = event.target.checked;
    dispatch(setCity({ city, turn }));
  };
  const chooseCountryHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const country = event.target.name;
    const turn = event.target.checked;
    dispatch(setCountry({ country, turn }));
  };

  return (
    <div>
      <div className=" text-orange-600 font-bold px-4 py-2">Owner</div>
      <div className="p-4 rounded-lg border-orange-600 border-2 ml-4 bg-black text-zinc-50">
        {allLocationsData.map((owner, index) => {
          return (
            <div key={index} className="flex">
              <input
                type="checkbox"
                name={owner.ownerName}
                onChange={chooseOwnerHandler}
                checked={filterCriterions.owners.includes(owner.ownerName)}
              />
              <label className="ml-2" htmlFor="City">
                {owner.ownerName}
              </label>
            </div>
          );
        })}
      </div>
      <div className=" text-orange-600 font-bold p-4 px-4 py-2">Cities</div>
      <div className="p-4 rounded-lg border-orange-600 border-2 ml-4 bg-black text-zinc-50">
        {cities.map((city, index) => {
          return (
            <div key={index} className="flex">
              <input
                type="checkbox"
                name={city[1]}
                onChange={chooseCityHandler}
                checked={filterCriterions.cities.includes(city[1])}
              />
              <label className="ml-2" htmlFor={city[1]}>
                {city[0]}
              </label>
            </div>
          );
        })}
      </div>
      <div className=" text-orange-600 font-bold p-4 px-4 py-2">Countries</div>
      <div className="p-4 rounded-lg border-orange-600 border-2 ml-4 bg-black text-zinc-50">
        {countries.map((country, index) => {
          return (
            <div key={index} className="flex">
              <input
                type="checkbox"
                name={country[1]}
                onChange={chooseCountryHandler}
                checked={filterCriterions.countries.includes(country[1])}
              />
              <label className="ml-2" htmlFor={country[1]}>
                {country[0]}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Filter };

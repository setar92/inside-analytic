import { IAllLocationsData, FilterState } from '../common/types';

const filterData = (
  data: IAllLocationsData[],
  filterCriterions: FilterState,
): IAllLocationsData[] => {
  const owners = filterCriterions.owners;
  const filteredByOwners = data.filter((loc) => owners.includes(loc.ownerName));

  let filteredByCity: IAllLocationsData[] = [];
  if (!filterCriterions.cities.includes('All')) {
    filterCriterions.cities.forEach((city) => {
      filteredByOwners.map((locations) => {
        const filteredData = locations.data.filter((loc) =>
          loc.city.includes(city),
        );
        filteredByCity.push({
          data: filteredData,
          marker: locations.marker,
          ownerName: locations.ownerName,
        });
      });
    });
  } else {
    filteredByCity = filteredByOwners;
  }

  let filteredByCountry: IAllLocationsData[] = [];
  if (!filterCriterions.countries.includes('All')) {
    filterCriterions.countries.forEach((country) => {
      filteredByOwners.map((locations) => {
        const filteredData = locations.data.filter(
          (loc) => loc.country === country,
        );
        filteredByCountry.push({
          data: filteredData,
          marker: locations.marker,
          ownerName: locations.ownerName,
        });
      });
    });
  } else {
    filteredByCountry = filteredByOwners;
  }
  return filterCriterions.countries.length ? filteredByCountry : filteredByCity;
};

export { filterData };

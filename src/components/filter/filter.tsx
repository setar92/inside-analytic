import { ChangeEvent, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/store/store.hooks';
import {
  setShow,
  allLocations,
  justLatvia,
  justRiga,
} from '../../store/filter/slice';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const showsPostMachines = useAppSelector((state) => state.filter);
  const nationalHideHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setShow({ ...showsPostMachines, showNational: event.target.checked }),
    );
  };
  const omnivaHideHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setShow({ ...showsPostMachines, showOmniva: event.target.checked }),
    );
  };
  const venipakHideHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setShow({ ...showsPostMachines, showVenipak: event.target.checked }),
    );
  };
  const justRigaHandler = (): void => {
    dispatch(justRiga(''));
  };
  const justLatviaHandler = (): void => {
    dispatch(justLatvia(''));
  };
  const allLocationsHandler = (): void => {
    dispatch(allLocations(''));
  };
  return (
    <div>
      <div className=" text-orange-600 font-bold px-4 py-2">Owner</div>
      <div className="p-4 rounded-lg border-orange-600 border-2 ml-4 bg-black text-zinc-50">
        <div className="flex">
          <input
            type="checkbox"
            name="National"
            onChange={nationalHideHandler}
            checked={showsPostMachines.showNational}
          />
          <label className="ml-2" htmlFor="National">
            National
          </label>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            name="Omniva"
            onChange={omnivaHideHandler}
            checked={showsPostMachines.showOmniva}
          />
          <label className="ml-2" htmlFor="Omniva">
            Omniva
          </label>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            name="Venipak"
            onChange={venipakHideHandler}
            checked={showsPostMachines.showVenipak}
          />
          <label className="ml-2" htmlFor="Venipak">
            Venipak
          </label>
        </div>
      </div>
      <div className=" text-orange-600 font-bold p-4 px-4 py-2">Location</div>
      <form className="p-4 rounded-lg border-orange-600 border-2 ml-4 bg-black text-zinc-50 ">
        <div>
          <div className="flex">
            <input
              type="radio"
              name="location"
              id="Riga"
              onChange={justRigaHandler}
              checked={showsPostMachines.justRiga}
            />
            <label className="ml-2" htmlFor="Riga">
              Riga
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              name="location"
              id="Latvia"
              onChange={justLatviaHandler}
              checked={showsPostMachines.justLatvia}
            />
            <label className="ml-2" htmlFor="Latvia">
              Latvia
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              name="location"
              id="All"
              onChange={allLocationsHandler}
              checked={showsPostMachines.allLocations}
            />
            <label className="ml-2" htmlFor="All">
              All
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
export { Filter };

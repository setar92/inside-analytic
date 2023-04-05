import { createSlice } from '@reduxjs/toolkit';

import { FilterState } from '../../common/types';

const initialState: FilterState = {
  showNational: true,
  showOmniva: true,
  showVenipak: true,
  justLatvia: false,
  justRiga: true,
  allLocations: false,
};

interface actionType {
  type: string;
  payload: FilterState;
}

const { reducer, actions } = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    setShow: (state, action: actionType) => {
      const shows = action.payload;
      state.showNational = shows.showNational;
      state.showOmniva = shows.showOmniva;
      state.showVenipak = shows.showVenipak;
    },
    justRiga: (state, _) => {
      state.justRiga = true;
      state.allLocations = false;
      state.justLatvia = false;
    },
    justLatvia: (state, _) => {
      state.justLatvia = true;
      state.justRiga = false;
      state.allLocations = false;
    },
    allLocations: (state, _) => {
      state.allLocations = true;
      state.justLatvia = false;
      state.justRiga = false;
    },
  },

  extraReducers: {},
});

export const { setShow, justRiga, justLatvia, allLocations } = actions;
export { reducer };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface filterState {
  filters: {
    currentFilter: string;
    rotateRight: boolean;
    rotateLeft: boolean;
    flip: boolean;
    filterValues: {
      name: string;
      value: number;
    }[];
  };
}

// Define the initial state using that type
const initialState: filterState = {
  filters: {
    currentFilter: "Brightness",
    rotateRight: false,
    rotateLeft: false,
    flip: false,
    filterValues: [
      {
        name: "Brightness",
        value: 50,
      },
      {
        name: "Saturation",
        value: 50,
      },
      {
        name: "Grayscale",
        value: 50,
      },
      {
        name: "Inversion",
        value: 50,
      },
    ],
  },
};

export const filterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeFilterOption: (state, action) => {
      state.filters.currentFilter = action.payload;
    },

    applyFilter: (state, action) => {
      state.filters.filterValues.forEach((filter) => {
        if (filter.name === action.payload.name) {
          filter.value = action.payload.value;
        }
      });
    },

    rotateLeft: (state) => {
      state.filters.rotateLeft = true;
    },

    rotateRight: (state) => {
      state.filters.rotateRight = true;
    },

    flip: (state) => {
      state.filters.flip = true;
    },

    reset: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  changeFilterOption,
  applyFilter,
  rotateLeft,
  rotateRight,
  flip,
  reset,
} = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilterOptions = (state: RootState) => state.filters.filters;

export default filterSlice.reducer;

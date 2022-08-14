import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface filterState {
  filters: {
    currentFilter: string;
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
  },
});

export const { changeFilterOption, applyFilter } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilterOptions = (state: RootState) => state.filters.filters;

export default filterSlice.reducer;

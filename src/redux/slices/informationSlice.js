import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  address: "",
  phone: "",
  email: "",
  city: "",
  districts: "",
  wards: "",
};

export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    addName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addCity: (state, action) => {
      state.city = action.payload;
    },
    addDistricts: (state, action) => {
      state.districts = action.payload;
    },
    addWards: (state, action) => {
      state.wards = action.payload;
    },
  },
});

export const {
  addAddress,
  addCity,
  addDistricts,
  addEmail,
  addName,
  addPhone,
  addWards,
} = informationSlice.actions;

export default informationSlice.reducer;

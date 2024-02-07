import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",

  initialState: {
    data: [],
    previous: "",
  },

  reducers: {
    saveWeather(state, action) {
      const capitalName = action.payload.name;
      const indexOfData = state.data.findIndex(
        (arrayItem) => arrayItem.name === capitalName
      );

      if (indexOfData > -1) {
        state.data[indexOfData] = action.payload;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export default weatherSlice;

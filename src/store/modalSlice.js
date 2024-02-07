import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { show: false, text: "", indication: "" },
  reducers: {
    showSuccess(state, action) {
      state.show = true;
      state.text = action.payload;
      state.indication = "success";
    },
    showFailure(state, action) {
      state.show = true;
      state.text = action.payload;
      state.indication = "failure";
    },
    hide(state) {
      state.show = false;
      state.text = "";
      state.indication = "";
    },
  },
});

export default modalSlice;

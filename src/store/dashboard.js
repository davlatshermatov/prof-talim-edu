import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./api";

const initialState = {
  // lyceums: 0,
  // schools: 0,
  // colleges: 0,
  // techschools: 0,
  // allJobs: 0,
  // givenCertificates: 0,
  // givenDiplomas: 0,
  // totalStudents: 0,
  // maleStudents: 0,
  // femaleStudents: 0,
  // totalQualifications: 0,
  // totalClassificators: 0,
  info: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const getDashboardInfo = () =>
  apiCall({
    url: "/",
    method: "get",
    onSuccess: dashboardSlice.actions.setDashboardInfo.type,
  });

export default dashboardSlice.reducer;

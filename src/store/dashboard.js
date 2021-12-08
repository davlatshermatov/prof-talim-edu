import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./api";

const initialState = {
  info: {},
  allStudents: {},
  allLyceums: {},
  allSchools: {},
  allColleges: {},
  allTechschools: {},
  allStudentsByEducation: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardInfo: (state, action) => {
      state.info = action.payload;
    },
    setAllStudents: (state, action) => {
      state.allStudents = action.payload;
    },
    setAllLyceums: (state, action) => {
      state.allLyceums = action.payload;
    },
    setAllSchools: (state, action) => {
      state.allSchools = action.payload;
    },
    setAllColleges: (state, action) => {
      state.allColleges = action.payload;
    },
    setAllTechschools: (state, action) => {
      state.allTechschools = action.payload;
    },
    setAllStudentsByEducation: (state, action) => {
      state.allStudentsByEducation = action.payload;
    },
  },
});

export const getDashboardInfo = () =>
  apiCall({
    url: "/",
    method: "get",
    onSuccess: dashboardSlice.actions.setDashboardInfo.type,
  });

export const getAllStudents = () =>
  apiCall({
    url: "/barcha-talabalar",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllStudents.type,
  });

export const getAllStudentsByEducation = () =>
  apiCall({
    url: "/talabalar",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllStudentsByEducation.type,
  });

export const getAllLyceums = () =>
  apiCall({
    url: "/lyceum",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllLyceums.type,
  });

export const getAllSchools = () =>
  apiCall({
    url: "/school",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllSchools.type,
  });

export const getAllColleges = () =>
  apiCall({
    url: "/college",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllColleges.type,
  });

export const getAllTechschools = () =>
  apiCall({
    url: "/techschool",
    method: "get",
    onSuccess: dashboardSlice.actions.setAllTechschools.type,
  });

export default dashboardSlice.reducer;

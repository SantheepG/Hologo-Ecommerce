// store.js
import { configureStore } from "@reduxjs/toolkit";

import DashboardReducer from "./DashboardReducer.reducer";

const store = configureStore({
  reducer: DashboardReducer,
  // Other configuration options, such as middleware, devTools, etc.
});

export default store;

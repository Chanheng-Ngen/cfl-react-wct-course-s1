import { configureStore } from '@reduxjs/toolkit';
import footballReducer from './slices/footballSlice';

export const store = configureStore({
  reducer: {
    football: footballReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['football/fetchLandingData/fulfilled'],
      },
    }),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import lifeStyle from './slices/lifeStyle';
import placeSlice from './slices/placeSlice';

export const store = configureStore({
  reducer: { placeSlice, lifeStyle },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

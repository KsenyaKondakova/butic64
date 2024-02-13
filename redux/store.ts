import { configureStore } from '@reduxjs/toolkit';

import beautySlice from './slices/beautySlice';
import fashionSlice from './slices/fashionSlice';
import lifeStyle from './slices/lifeStyle';
import placeSlice from './slices/placeSlice';
import starsSlice from './slices/starsSlice';

export const store = configureStore({
  reducer: { placeSlice, lifeStyle, starsSlice, beautySlice, fashionSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

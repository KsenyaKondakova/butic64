import { configureStore } from '@reduxjs/toolkit';

import afishaSlice from './slices/afishaSlice';
import beautySlice from './slices/beautySlice';
import fashionSlice from './slices/fashionSlice';
import lifeStyle from './slices/lifeStyle';
import newsSlice from './slices/newsSlice';
import placeSlice from './slices/placeSlice';
import starsSlice from './slices/starsSlice';

export const store = configureStore({
  reducer: {
    placeSlice,
    lifeStyle,
    starsSlice,
    beautySlice,
    fashionSlice,
    newsSlice,
    afishaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlaceState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlaceState = {
  places: [],
  images: [],
  afisha: [],
  news: [],
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<IPlaceList[]>) => {
      state.places = action.payload;
      state.images = [];
      state.news = [];
      state.afisha = [];
      action.payload.forEach((place: IPlaceList) => {
        if (place.images && place.images.length !== 0) {
          state.images.push(place.images);
        }
        if (place.afisha && place.afisha.length !== 0) {
          state.afisha = state.afisha.concat(place.afisha);
        }
        if (place.news && place.news.length !== 0) {
          state.news = state.news.concat(place.news);
        }
      });
    },
  },
});

export const { setPlaces } = placeSlice.actions;
export default placeSlice.reducer;

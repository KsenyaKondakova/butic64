import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlacePageState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlacePageState = {
  places: [],
  placeInfo: { _id: null, title: '', description: '', category: '', news: [] },
};

export const lyfeStyle = createSlice({
  name: 'lifestyle',
  initialState,
  reducers: {
    setLyfeStylePlaces: (state, action: PayloadAction<IPlaceList[]>) => {
      state.places = action.payload;
    },
    setPlaceInfoLifeStyle: (state, action: PayloadAction<IPlaceList>) => {
      state.placeInfo = action.payload;
    },
  },
});

export const { setLyfeStylePlaces, setPlaceInfoLifeStyle } = lyfeStyle.actions;
export default lyfeStyle.reducer;

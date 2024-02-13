import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlacePageState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlacePageState = {
  places: [],
  placeInfo: { _id: null, title: '', description: '', category: '', news: [] },
};

export const beautySlice = createSlice({
  name: 'beauty',
  initialState,
  reducers: {
    setBeautyPlaces: (state, action: PayloadAction<IPlaceList[]>) => {
      state.places = action.payload;
    },
    setBeautyPlaceInfo: (state, action: PayloadAction<IPlaceList>) => {
      state.placeInfo = action.payload;
    },
  },
});

export const { setBeautyPlaces, setBeautyPlaceInfo } = beautySlice.actions;
export default beautySlice.reducer;

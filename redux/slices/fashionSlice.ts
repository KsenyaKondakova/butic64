import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlacePageState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlacePageState = {
  places: [],
  placeInfo: { _id: null, title: '', description: '', category: '', news: [] },
};

export const fashionSlice = createSlice({
  name: 'fashion',
  initialState,
  reducers: {
    setFashionPlaces: (state, action: PayloadAction<IPlaceList[]>) => {
      state.places = action.payload;
    },
    setFashionPlaceInfo: (state, action: PayloadAction<IPlaceList>) => {
      state.placeInfo = action.payload;
    },
  },
});

export const { setFashionPlaces, setFashionPlaceInfo } = fashionSlice.actions;
export default fashionSlice.reducer;

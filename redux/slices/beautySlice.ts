import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategorList, IPlacePageState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlacePageState = {
  places: [],
  placeInfo: { _id: null, title: '', description: '', category: '', news: [] },
  categories: [],
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
    setBeautyCategories: (state, action: PayloadAction<ICategorList[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setBeautyPlaces, setBeautyPlaceInfo, setBeautyCategories } =
  beautySlice.actions;
export default beautySlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategorList, IPlacePageState } from '@/types/placesType';

import { IPlaceList } from '../../types/placesType';

const initialState: IPlacePageState = {
  places: [],
  placeInfo: { _id: null, title: '', description: '', category: '', news: [] },
  categories: [],
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
    setFashionCategories: (state, action: PayloadAction<ICategorList[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setFashionPlaces, setFashionPlaceInfo, setFashionCategories } =
  fashionSlice.actions;
export default fashionSlice.reducer;

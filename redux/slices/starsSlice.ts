import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStarsState, StarList } from '@/types/placesType';

const initialState: IStarsState = {
  stars: [],
  starInfo: {
    _id: null,
    name: '',
    secondName: '',
    description: '',
    subdescription: '',
    orderStar: '',
  },
  viewStar: {
    _id: null,
    name: '',
    secondName: '',
    description: '',
    subdescription: '',
    orderStar: '',
  },
};

export const starsSlice = createSlice({
  name: 'stars',
  initialState,
  reducers: {
    setStars: (state, action: PayloadAction<StarList[]>) => {
      state.stars = action.payload.sort(
        (a, b) => Number(a.orderStar) - Number(b.orderStar),
      );
    },
    setStar: (state, action: PayloadAction<StarList>) => {
      state.starInfo = action.payload;
    },
    setViewStar: (state, action: PayloadAction<StarList>) => {
      state.viewStar = action.payload;
    },
  },
});

export const { setStars, setStar, setViewStar } = starsSlice.actions;
export default starsSlice.reducer;

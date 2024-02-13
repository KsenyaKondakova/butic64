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
  },
};

export const starsSlice = createSlice({
  name: 'stars',
  initialState,
  reducers: {
    setStars: (state, action: PayloadAction<StarList[]>) => {
      state.stars = action.payload;
    },
    setStar: (state, action: PayloadAction<StarList>) => {
      state.starInfo = action.payload;
    },
  },
});

export const { setStars, setStar } = starsSlice.actions;
export default starsSlice.reducer;

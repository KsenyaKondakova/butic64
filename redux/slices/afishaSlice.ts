import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AfishaList,
  IAfishaState,
  IAfishaWithParent,
} from '@/types/placesType';

const initialState: IAfishaState = {
  afisha: [],
  mergeAfisha: [],
  modalAfisha: { _id: '', image: '' },
};

export const afishaSlice = createSlice({
  name: 'afisha',
  initialState,
  reducers: {
    setAfisha: (state, action: PayloadAction<AfishaList[]>) => {
      state.afisha = action.payload;
    },
    setMergeAfisha: (
      state,
      action: PayloadAction<{
        placesAfisha: IAfishaWithParent[];
        mainAfisha: AfishaList[];
      }>,
    ) => {
      const { placesAfisha, mainAfisha } = action.payload;
      state.mergeAfisha = [...placesAfisha, ...mainAfisha];
    },
    setModalAfisha: (state, action: PayloadAction<AfishaList>) => {
      state.modalAfisha = action.payload;
    },
  },
});

export const { setAfisha, setMergeAfisha, setModalAfisha } =
  afishaSlice.actions;
export default afishaSlice.reducer;

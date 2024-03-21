import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AfishaList,
  IAfishaState,
  IAfishaWithParent,
} from '@/types/placesType';

const initialState: IAfishaState = {
  afisha: [],
  mergeAfisha: [],
  modalAfisha: { _id: '', image: '', dateImages: '' },
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
      const sortAfisha = [...placesAfisha, ...mainAfisha].sort(
        (a: AfishaList, b: AfishaList) => {
          const dateA = a.dateImages ? new Date(a.dateImages) : null;
          const dateB = b.dateImages ? new Date(b.dateImages) : null;

          if (dateA && dateB) {
            return dateB.getTime() - dateA.getTime();
          } else if (dateA && !dateB) {
            return -1;
          } else if (!dateA && dateB) {
            return 1;
          } else {
            return 0;
          }
        },
      );
      state.mergeAfisha = sortAfisha;
    },
    setModalAfisha: (state, action: PayloadAction<AfishaList>) => {
      state.modalAfisha = action.payload;
    },
  },
});

export const { setAfisha, setMergeAfisha, setModalAfisha } =
  afishaSlice.actions;
export default afishaSlice.reducer;

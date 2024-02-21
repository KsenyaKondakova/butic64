import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INewsState, NewsList } from '@/types/placesType';

const initialState: INewsState = {
  news: [],
  mergeNews: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsList[]>) => {
      state.news = action.payload;
    },
    setMergeNews: (
      state,
      action: PayloadAction<{ placesNews: NewsList[]; mainNews: NewsList[] }>,
    ) => {
      const { placesNews, mainNews } = action.payload;
      state.mergeNews = [...placesNews, ...mainNews];
      state.mergeNews.sort(
        (a: { date: string }, b: { date: string }) =>
          new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    },
  },
});

export const { setNews, setMergeNews } = newsSlice.actions;
export default newsSlice.reducer;
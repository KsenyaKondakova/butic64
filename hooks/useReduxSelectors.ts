import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

export const usePlacesData = () =>
  useSelector((state: RootState) => state.placeSlice.places);
export const usePlacesNews = () =>
  useSelector((state: RootState) => state.placeSlice.news);
export const usePlacesAfisha = () =>
  useSelector((state: RootState) => state.placeSlice.afisha);
export const useMainNews = () =>
  useSelector((state: RootState) => state.newsSlice.news);
export const useMainAfisha = () =>
  useSelector((state: RootState) => state.afishaSlice.afisha);
export const useMergeNews = () =>
  useSelector((state: RootState) => state.newsSlice.mergeNews);
export const useMergeAfisha = () =>
  useSelector((state: RootState) => state.afishaSlice.mergeAfisha);
export const useModalNews = () =>
  useSelector((state: RootState) => state.newsSlice.modalNews);
export const useModalAfisha = () =>
  useSelector((state: RootState) => state.afishaSlice.modalAfisha);
export const useLifeStylePlacesData = () =>
  useSelector((state: RootState) => state.lifeStyle.places);
export const useLifeStyleCategories = () =>
  useSelector((state: RootState) => state.lifeStyle.categories);
export const useBeautyPlacesData = () =>
  useSelector((state: RootState) => state.beautySlice.places);
export const useBeautyCategories = () =>
  useSelector((state: RootState) => state.beautySlice.categories);
export const useFashionPlacesData = () =>
  useSelector((state: RootState) => state.fashionSlice.places);
export const useFashionCategories = () =>
  useSelector((state: RootState) => state.fashionSlice.categories);
export const useStarsData = () =>
  useSelector((state: RootState) => state.starsSlice.stars);
export const useViewStarData = () =>
  useSelector((state: RootState) => state.starsSlice.viewStar);

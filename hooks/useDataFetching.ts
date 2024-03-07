import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setAfisha } from '@/redux/slices/afishaSlice';
import {
  setBeautyCategories,
  setBeautyPlaces,
} from '@/redux/slices/beautySlice';
import {
  setFashionCategories,
  setFashionPlaces,
} from '@/redux/slices/fashionSlice';
import {
  setLyfeStyleCategories,
  setLyfeStylePlaces,
} from '@/redux/slices/lifeStyle';
import { setNews } from '@/redux/slices/newsSlice';
import { setPlaces } from '@/redux/slices/placeSlice';
import { setStars } from '@/redux/slices/starsSlice';

export const usePlaceFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/places')
      .then((response) => {
        dispatch(setPlaces(response.data));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};

export const useNewsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/news')
      .then((response) => {
        dispatch(setNews(response.data));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};
export const useAfishaFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/afisha')
      .then((response) => {
        dispatch(setAfisha(response.data));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};
export const useLifeStyleFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/lifestyle')
      .then((response) => {
        dispatch(setLyfeStylePlaces(response.data.establishments));
        dispatch(setLyfeStyleCategories(response.data.subCategories));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};
export const useBeutyFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/beauty')
      .then((response) => {
        dispatch(setBeautyPlaces(response.data.establishments));
        dispatch(setBeautyCategories(response.data.subCategories));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};
export const useFashionFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/fashion')
      .then((response) => {
        dispatch(setFashionPlaces(response.data.establishments));
        dispatch(setFashionCategories(response.data.subCategories));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};
export const useStarsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/api/stars')
      .then((response) => {
        dispatch(setStars(response.data));
      })
      .catch((error) => {
        console.error('Error fetching places: ', error);
      });
  }, [dispatch]);
};

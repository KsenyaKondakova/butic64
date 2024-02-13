import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from '@/components/Cards/Cards';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';

import { setStars } from '@/redux/slices/starsSlice';
import { RootState } from '@/redux/store';

const Stars = () => {
  const dispatch = useDispatch();
  const stars = useSelector((state: RootState) => state.starsSlice.stars);

  useEffect(() => {
    axios.get('/api/stars').then((response) => {
      dispatch(setStars(response.data));
    });
  }, []);

  return (
    <>
      <Nav />
      <Layout>
        {stars.map((obj) => (
          <div key={obj._id}>{obj.name}</div>
        ))}
      </Layout>
    </>
  );
};

export default Stars;

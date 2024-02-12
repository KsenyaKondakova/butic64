import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from '@/components/Cards/Cards';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';

import { setLyfeStylePlaces } from '@/redux/slices/lifeStyle';
import { RootState } from '@/redux/store';

function Lifestyle() {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.lifeStyle.places);

  useEffect(() => {
    axios.get('/api/lifestyle').then((response) => {
      dispatch(setLyfeStylePlaces(response.data));
    });
  }, []);

  return (
    <>
      <Nav />
      <Layout>
        <Cards data={places} />
      </Layout>
    </>
  );
}

export default Lifestyle;

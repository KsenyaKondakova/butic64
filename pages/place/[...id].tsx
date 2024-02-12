import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPlaceInfoLifeStyle } from '@/redux/slices/lifeStyle';
import { RootState } from '@/redux/store';

const ViewPlace = () => {
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();
  const placeInfo = useSelector(
    (state: RootState) => state.lifeStyle.placeInfo,
  );
  const id: string | string[] | undefined = router.query.id;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/getPlace?id=' + id).then((response) => {
      dispatch(setPlaceInfoLifeStyle(response.data));
    });
  }, [id]);
  return <div>{placeInfo.title}</div>;
};

export default ViewPlace;

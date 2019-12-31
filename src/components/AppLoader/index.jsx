import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGlobalStore } from '../../store';
import { initApp } from '../../store/modules/init/actions';

export const AppLoader = () => {
  const { dispatch } = useGlobalStore();
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
  return <CircularProgress disableShrink />;
};

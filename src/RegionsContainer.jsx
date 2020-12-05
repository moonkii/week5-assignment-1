import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Options from './Options';

import {
  loadRegions,
  setRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, region } = useSelector((state) => ({
    regions: state.regions,
    region: state.region,
  }));

  function handleClick({ id, name }) {
    dispatch(setRegion({ id, name }));
  }

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Options
      options={regions}
      selected={region}
      onClick={handleClick}
    />
  );
}

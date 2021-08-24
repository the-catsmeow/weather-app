import React, { useState } from 'react';
import API from '../API';
import {
  CloseLocationSearch,
  LocationList,
  LocationMenuLayout,
  LocationSearch,
} from './components';

const LocationMenu = ({ closeHandler, setLocation, BASE_URL }) => {
  const [locationInput, setLocationInput] = useState('');
  const [locationResults, setLocationResults] = useState([]);

  const onClickSearchHandler = async () => {
    API.fetchLocations(locationInput).then((locationResponse) => {
      setLocationResults(locationResponse);
    });
  };

  const onClickLocationResultHandler = (latt_long) => {
    const delimeterIdx = latt_long.indexOf(',');
    const latitude = latt_long.substring(0, delimeterIdx);
    const longitude = latt_long.substring(delimeterIdx + 1);

    setLocation({
      latitude,
      longitude,
    });

    closeHandler();
  };

  return (
    <LocationMenuLayout>
      <CloseLocationSearch onClickHandler={closeHandler} />
      <LocationSearch
        value={locationInput}
        onChangeHandler={setLocationInput}
        placeholder="search location"
        onClickSearchHandler={onClickSearchHandler}
      />
      <LocationList
        locations={locationResults}
        onClickLocationResultHandler={onClickLocationResultHandler}
      />
    </LocationMenuLayout>
  );
};

export default LocationMenu;

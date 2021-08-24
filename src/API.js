const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/';

const API = {
  fetchData: async (location) => {
    const locationRequest = await fetch(
      BASE_URL +
        'location/search/?lattlong=' +
        location.latitude +
        ',' +
        location.longitude
    );
    const locationResponse = await locationRequest.json();
    const weatherRequest = await fetch(
      BASE_URL + 'api/location/' + locationResponse[0].woeid
    );
    const weatherResponse = await weatherRequest.json();

    return weatherResponse;
  },
  fetchLocations: async (locationName) => {
    let locationRequest = await fetch(
      BASE_URL + '/location/search/?query=' + locationName
    );
    let locationResponse = await locationRequest.json();

    return locationResponse;
  },
};

export default API;

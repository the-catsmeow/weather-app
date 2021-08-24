import {
  Sidebar,
  SearchLocator,
  CurrentWeatherImage,
  Temperature,
  CurrentWeatherFlex,
  TodaysDate,
  CurrentLocation,
} from './components';

const SideBar = ({
  currentLocation,
  forecast,
  openLocationHandler,
  currentScale,
  getLocation,
}) => {
  return (
    <Sidebar>
      <SearchLocator
        buttonText="Search for Places"
        openLocationHandler={openLocationHandler}
        getLocation={getLocation}
      />

      <CurrentWeatherImage currentWeatherAbbr={forecast.weather_state_abbr} />
      <Temperature
        currentScale={currentScale}
        currentTemperature={forecast.the_temp}
      />
      <CurrentWeatherFlex>{forecast.weather_state_name}</CurrentWeatherFlex>
      <TodaysDate todaysDate={forecast.applicable_date} />
      <CurrentLocation currentLocation={currentLocation} />
    </Sidebar>
  );
};

export default SideBar;

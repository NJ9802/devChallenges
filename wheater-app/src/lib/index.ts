import { Location, NextDaysWeatherData, Position, WeatherData } from "@/types";

export const getLocations = async (
  searchQuery: string
): Promise<Location[]> => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=a2fc807affee08686e5d7d6d27d5de90`
  );

  return await response.json();
};

export const getWeather = async (
  lat: number,
  lon: number,
  isMetric: boolean
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2fc807affee08686e5d7d6d27d5de90&units=${
      isMetric ? "metric" : "imperial"
    }`
  );

  return await response.json();
};

export const getNextDaysWeather = async (
  lat: number,
  lon: number,
  isMetric: boolean
): Promise<NextDaysWeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2fc807affee08686e5d7d6d27d5de90&units=${
      isMetric ? "metric" : "imperial"
    }`
  );

  return await response.json();
};

export const setCurrentLocation = ({
  locationRef,
  isMetric,
  setWeatherData,
  setNextDaysWeatherData,
}: {
  locationRef: { current: { lat: number; lon: number } };
  isMetric: boolean;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  setNextDaysWeatherData: React.Dispatch<
    React.SetStateAction<NextDaysWeatherData | null>
  >;
}) => {
  const successLocation = async (position: Position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    locationRef.current = { lat, lon };

    setWeatherData(await getWeather(lat, lon, isMetric));
    setNextDaysWeatherData(await getNextDaysWeather(lat, lon, isMetric));
  };

  const errorLocation = async (error: { code: number; message: string }) => {
    setWeatherData(await getWeather(51.5085, -0.1257, isMetric));
    setNextDaysWeatherData(
      await getNextDaysWeather(51.5085, -0.1257, isMetric)
    );
    alert("Location unavailable. Displaying default location: London");
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  }
};

export const getOrganizedNextDaysWeatherData = (
  nextDaysWeatherData: NextDaysWeatherData
) => {
  let dayMeasurements: {
    [key: string]: { temps: number[]; weather: string; icon: string };
  } = {};

  const today = new Date().toISOString().split("T")[0];

  for (let data of nextDaysWeatherData.list) {
    const date = data.dt_txt!.split(" ")[0];

    if (date === today) {
      continue;
    }

    if (!dayMeasurements[date]) {
      dayMeasurements[date] = { temps: [], weather: "", icon: "" };
    }

    dayMeasurements[date].temps.push(data.main.temp);
    dayMeasurements[date].weather = data.weather[0].main;
    dayMeasurements[date].icon = data.weather[0].icon;
  }
  return dayMeasurements;
};

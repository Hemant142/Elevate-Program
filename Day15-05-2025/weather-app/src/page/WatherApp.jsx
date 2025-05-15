import React, { useState } from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Error from "../components/Error";
import WeatherInfo from "../components/WeatherInfo";

export default function WatherApp() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const { data, isLoading, error } = useFetchWeather(submittedCity);
  const handleSearch = () => {
    setSubmittedCity(city);
  };
  return (
    <>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {data && <WeatherInfo weatherData={data} />}
    </>
  );
}

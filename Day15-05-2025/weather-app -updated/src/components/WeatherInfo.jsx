import React, { useEffect, useState } from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import useCurrentLocation from "../hooks/useCurrentLocation";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Error from "../components/Error";
import WeatherInfo from "../components/WeatherInfo";
import Favourites from "../components/Favourites";
import { Button, Stack } from "@mui/material";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("favourites")) || []
  );
  const { data, isLoading, error } = useFetchWeather(submittedCity);
  const { location } = useCurrentLocation();

  const handleSearch = () => setSubmittedCity(city);

  const addFavourite = () => {
    if (submittedCity && !favourites.includes(submittedCity)) {
      const updated = [...favourites, submittedCity];
      setFavourites(updated);
      localStorage.setItem("favourites", JSON.stringify(updated));
    }
  };

  const removeFavourite = (cityToRemove) => {
    const updated = favourites.filter((fav) => fav !== cityToRemove);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  const searchByLocation = () => {
    if (location) {
      setSubmittedCity(`${location.latitude},${location.longitude}`);
    }
  };

  useEffect(() => {
    if (submittedCity.includes(",")) {
      const [lat, lon] = submittedCity.split(",");
      setCity("");
    }
  }, [submittedCity]);

  return (
    <>
      <Stack spacing={2}>
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        <Button onClick={searchByLocation} variant="contained">
          Use Current Location
        </Button>
        {data && (
          <Button onClick={addFavourite} variant="outlined">
            Add to Favourites
          </Button>
        )}
        {isLoading && <Loading />}
        {error && <Error message={error} />}
        {data && <WeatherInfo weatherData={data} />}
        <Favourites
          favourites={favourites}
          onSelect={(c) => setSubmittedCity(c)}
          onRemove={removeFavourite}
        />
      </Stack>
    </>
  );
}

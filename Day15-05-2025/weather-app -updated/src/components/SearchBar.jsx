import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import getCitySuggestions from "../utils/getCitySuggestions";

export default function SearchBar({ city, setCity, onSearch }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.trim()) {
        try {
          const suggestions = await getCitySuggestions(city);
          setOptions(suggestions || []);
        } catch (error) {
          console.error("Error fetching city suggestions:", error);
          setOptions([]);
        }
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timer);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          freeSolo
          options={options}
          inputValue={city}
          onInputChange={(e, newVal) => setCity(newVal)}
          renderInput={(params) => (
            <TextField {...params} label="Enter City" variant="outlined" fullWidth />
          )}
        />
        <Button type="submit" variant="outlined" color="primary">
          Search
        </Button>
      </Stack>
    </form>
  );
}

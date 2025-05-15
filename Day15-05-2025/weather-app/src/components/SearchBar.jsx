import { Button, Stack, TextField } from "@mui/material";
import React from "react";

export default function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" variant="outlined" color="primary">
          Search
        </Button>
      </Stack>
    </form>
  );
}

import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

export default function WeatherInfo({ weather }) {
  const { name, temp, condition, humidity, wind } = weather;

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Weather in {name}
        </Typography>
        <Stack spacing={1}>
          <Typography>🌡️ Temperature: {temp}°C</Typography>
          <Typography>☁️ Condition: {condition}</Typography>
          <Typography>💧 Humidity: {humidity}%</Typography>
          <Typography>🌬️ Wind Speed: {wind} m/s</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

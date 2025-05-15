// import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  WbSunny,
  Opacity,
  Air,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

export default function WeatherInfo({ weatherData }) {
  const theme = createTheme({
    palette: {
      mode: "light", // force light mode
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: 2,
          bgcolor: "#f5f5f5", // Light background
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            position: "relative",
            overflow: "visible",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {weatherData.location}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ ml: 1, mt: 0.5 }}
              >
                {weatherData.country}
              </Typography>
              <LocationOn
                sx={{
                  ml: "auto",
                  color: "gray",
                  opacity: 0.7,
                }}
              />
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 4 }}
            >
              Updated {weatherData.lastUpdated}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: "4rem",
                  lineHeight: 1,
                }}
              >
                {weatherData.temperature}°
              </Typography>

              <Box sx={{ ml: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Feels like {weatherData.feelsLike}°
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {weatherData.condition}
                </Typography>
              </Box>

              <Box
                sx={{
                  ml: "auto",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt={weatherData.condition}
                  title={weatherData.condition}
                  style={{ width: 40, height: 40 }}
                />
              </Box>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "rgba(0,0,0,0.02)",
                    borderColor: "rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Opacity
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: "gray",
                          opacity: 0.7,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        Humidity
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                      {weatherData.humidity}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "rgba(0,0,0,0.02)",
                    borderColor: "rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Air
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: "gray",
                          opacity: 0.7,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        Wind Speed
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                      {weatherData.windSpeed} m/s
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

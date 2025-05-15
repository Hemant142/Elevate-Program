"use client";

import React, { useState, useEffect } from "react";
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

const WeatherCard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2",
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: darkMode
              ? "0 8px 16px rgba(0, 0, 0, 0.4)"
              : "0 8px 16px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  });

  const weatherData = {
    location: "Gurgaon",
    country: "IN",
    lastUpdated: "just now",
    temperature: 40,
    feelsLike: 38,
    condition: "Few Clouds",
    humidity: 14,
    windSpeed: 2.78,
  };

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
          bgcolor: theme.palette.background.default,
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
          <IconButton
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
              "&:hover": {
                bgcolor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
              },
            }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <LightMode fontSize="small" />
            ) : (
              <DarkMode fontSize="small" />
            )}
          </IconButton>

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
                  color: theme.palette.text.secondary,
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
                  bgcolor: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                }}
              >
                <WbSunny
                  sx={{
                    color: darkMode ? "#f9d71c" : "#ff9800",
                    fontSize: 32,
                  }}
                />
              </Box>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: darkMode
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)",
                    borderColor: darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Opacity
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: theme.palette.text.secondary,
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
                    bgcolor: darkMode
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)",
                    borderColor: darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Air
                        fontSize="small"
                        sx={{
                          mr: 1,
                          color: theme.palette.text.secondary,
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
};

export default WeatherCard;

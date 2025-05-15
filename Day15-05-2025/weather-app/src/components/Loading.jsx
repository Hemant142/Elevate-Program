import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Stack alignItems="center" spacing={2} mt={4}>
      <CircularProgress />
      <Typography>Loading weather data...</Typography>
    </Stack>
  );
}

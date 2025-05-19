import { Alert } from "@mui/material";
import React from "react";

export default function Error({ message }) {
  return (
    <Alert severity="error" sx={{ mt: 4 }}>
      {message}
    </Alert>
  );
}

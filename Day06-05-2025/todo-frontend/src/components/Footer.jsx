import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ p: 2, textAlign: "center", backgroundColor: "#f5f5f5" }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Task Manager. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

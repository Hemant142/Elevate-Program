import React from "react";
import { List, ListItem, IconButton, Typography, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Favourites({ favourites, onSelect, onRemove }) {
  return (
    <Stack spacing={1} mt={3}>
      <Typography variant="h6">Favourites</Typography>
      <List>
        {favourites.map((city) => (
          <ListItem
            key={city}
            secondaryAction={
              <IconButton edge="end" onClick={() => onRemove(city)}>
                <DeleteIcon />
              </IconButton>
            }
            button
            onClick={() => onSelect(city)}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

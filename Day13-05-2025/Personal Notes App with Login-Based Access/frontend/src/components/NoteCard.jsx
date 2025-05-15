// src/components/NoteCard.jsx
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteCard = ({ id, title, content, createdAt, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(createdAt).toLocaleString()}
        </Typography>
        <Typography variant="body1" mt={1}>
          {content}
        </Typography>
        <IconButton onClick={() => onDelete(id)} style={{ float: "right" }}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NoteCard;

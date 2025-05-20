import { Avatar, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function CandidateCard({entry,onDelete}) {
  return (
    <Paper
  sx={{ p: 2, my: 1, display: 'flex', alignItems: 'center', gap: 2 }}
    >
      <Avatar src={entry.profilePic} alt="Profile Picture"  sx={{ width: 56, height: 56 }} />
      <div>
        <Typography variant="h6">{entry.fullName}</Typography>
        <Typography variant="body2">{entry.email}</Typography>
        <Typography variant="body2">{entry.phone}</Typography>
        <Typography variant="body2">{entry.gender}</Typography>
        <Typography variant="body2">
          Skills: {entry.skills.join(', ')}
        </Typography>
      </div>
      <IconButton onClick={() => onDelete(entry.id)} color='error'>
        <DeleteIcon color='error' />
      </IconButton>
    </Paper>
  )
}

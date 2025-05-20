import { Typography } from '@mui/material'
import React from 'react'
import CandidateCard from './CandidateCard'

export default function CandidateList({entries,onDeletes}) {
  return (
    <div>
        <Typography variant='h6' gutterBottom>Registered Candidates</Typography>
        {entries.map((entry) => (
            <CandidateCard key={entry.id} entry={entry} onDelete={onDeletes} />
        ))}
    </div>
  )
}

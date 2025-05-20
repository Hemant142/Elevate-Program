// src/App.jsx
import React, { useEffect, useState } from 'react';
import {
  Grid, Paper
} from '@mui/material';
import CandidateForm from './components/CandidateForm';
import CandidateList from './components/CandidateList';

function App() {
  // Initialize entries from localStorage if available
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('entries');
    return saved ? JSON.parse(saved) : [];
  });

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  // Add entry with unique id
  const handleAddEntry = (newEntry) => {
    const entryWithId = { ...newEntry, id: Date.now() + Math.random() };
    setEntries((prevEntries) => [...prevEntries, entryWithId]);
  };

  // Delete entry by id
  const handleDeleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter(e => e.id !== id));
  };

  return (
    <Grid container justifyContent="center" sx={{ p: 3, bgcolor: '#f5f5f5' }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper elevation={4} sx={{ p: 4 }}>
          <CandidateForm onAddEntry={handleAddEntry} />
        </Paper>
      </Grid>
      {entries.length > 0 && (
        <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
          <CandidateList entries={entries} onDeletes={handleDeleteEntry} />
        </Paper>
      )}
    </Grid>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import NoteCard from "../components/NoteCard";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  console.log(token, "token");
  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/notes/get", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Failed to load notes. Server error."
      );
    }
  };

  const handleAddNote = async () => {
    if (!form.title || !form.content) {
      toast.error("Both title and content are required.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/notes/add", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Note added!");
      setForm({ title: "", content: "" });
      fetchNotes();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Add note failed. Try again later."
      );
    }
  };

  const handleDelete = async (id) => {
    console.log(id, "handleDelete Id");
    try {
      await axios.delete(`http://localhost:8080/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Note deleted.");
      fetchNotes();
    } catch (err) {
      toast.error("Delete failed.");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={3} textAlign="center">
        <Typography variant="h4" color="#244c9c" fontWeight="bold">
          Welcome {username || "User"} 👋
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Your Notes Dashboard
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <TextField
          label="Title"
          fullWidth
          value={form.title}
          margin="normal"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          value={form.content}
          margin="normal"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#244c9c", fontWeight: "bold" }}
          onClick={handleAddNote}
        >
          Add Note
        </Button>
      </Paper>

      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <NoteCard {...note} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;

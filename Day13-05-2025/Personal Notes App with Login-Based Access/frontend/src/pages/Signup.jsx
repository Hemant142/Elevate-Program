import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
  Link,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:8080/api/auth/signup", form);
      toast.success("Signup successful! Please login.");
      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Signup failed. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 5, borderRadius: 3 }}>
          <Typography variant="h4" mb={3} textAlign="center" color="#244c9c">
            Create an Account
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: "#244c9c",
              fontWeight: "bold",
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Signup"
            )}
          </Button>

          <Typography textAlign="center" mt={3}>
            Already have an account?{" "}
            <Link href="/" underline="hover" color="#244c9c" fontWeight="bold">
              Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;

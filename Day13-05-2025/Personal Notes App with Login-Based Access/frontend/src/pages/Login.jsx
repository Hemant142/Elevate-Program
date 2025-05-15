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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err, "err");
      toast.error(
        err?.response?.data?.message || "Login failed. Please try again."
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
            Welcome Back 👋
          </Typography>

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
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

          <Typography textAlign="center" mt={3}>
            Don’t have an account?{" "}
            <Link
              href="/signup"
              underline="hover"
              color="#244c9c"
              fontWeight="bold"
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;

import {
    Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";

const skillsOptions = ["React", "Node.js", "Python", "Java", "C++"];

export default function CandidateForm({ onAddEntry }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    skills: [],
    profilePic: "",
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState({});
  const fileInputRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    const updatedSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter((skill) => skill !== value);
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePic: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

    const validateForm = () => {
    const newError = {};
    if (!formData.fullName) {
      newError.fullName = "Full Name is required";
    }
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email is invalid";
    }
    if (!formData.phone) {
      newError.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Phone number must be 10 digits";
    }
    if (!formData.gender) {

       newError.gender = "Required";
    }
    if (formData.skills.length < 2) {
      newError.skills = "At least two skills are required";

    }
    if(formData.profilePic === "") {
      newError.profilePic = "Profile picture is required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!validateForm()) return;
    const reader= new FileReader()
    console.log(reader,"Reader")
    reader.onload = () => {
      const newEntry = {
        ...formData,
        profilePic: reader.result,
        id:Date.now()
      };
      onAddEntry(newEntry);
       setFormData({
        fullName: '', email: '', phone: '',
        gender: '', skills: [], profilePic: ''
      });
      setPreview('');
      setError({});
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsDataURL(formData.profilePic);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Candidate Registration
      </Typography>
      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        margin="normal"
        error={!!error.fullName}
        helperText={error.fullName}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        error={!!error.email}
        helperText={error.email}
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
        error={!!error.phone}
        helperText={error.phone}
      />
      <Typography sx={{ mt: 2 }}>Gender:</Typography>
      <RadioGroup
        row
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
      </RadioGroup>
      {error.gender && <Typography color="error">{error.gender}</Typography>}
      <Typography sx={{ mt: 2 }}>Skills:</Typography>
      <FormGroup row>
        {skillsOptions.map((skill) => (
          <FormControlLabel
            key={skill}
            control={
              <Checkbox
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillsChange}
              />
            }
            label={skill}
          />
        ))}
      </FormGroup>
      {error.skills && <Typography color="error">{error.skills}</Typography>}
      <Button variant="contained" component="label" sx={{ mt: 2 }}>
        Upload Profile Picture
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
          ref={fileInputRef}
        />
      </Button>
      {error.profilePic && (
        <Typography color="error">{error.profilePic}</Typography>
      )}
      {preview && (
        <Avatar
          src={preview}
          alt="Profile Picture"
          sx={{ width: 56, height: 56, mt: 2 }}
        />
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
      >
        Register
      </Button>
    </form>
  );
}

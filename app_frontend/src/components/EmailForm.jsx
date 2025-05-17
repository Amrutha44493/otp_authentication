import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/send-otp', { email });
    localStorage.setItem('email', email);
    navigate('/verify');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#ffe0b2', 
      }}
    >
      <Container maxWidth="sm" className="mt-5 p-4 rounded shadow-md" style={{ backgroundColor: '#fff3e0' }}> 
        <Typography variant="h6" component="h6" gutterBottom className="text-center">
          Enter Your Email
        </Typography>
        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Button
            variant="contained"
            sx={{ bgcolor: '#ff8f00', '&:hover': { bgcolor: '#e65100' } }} 
            color="primary" 
            type="submit"
            className="btn btn-primary"
          >
            Send OTP
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default EmailForm;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const OtpForm = () => {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/verify-otp', { email, otp });
      if (res.data.success) navigate('/welcome');
    } catch (err) {
      alert('Invalid OTP');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#e0f7fa', 
      }}
    >
      <Container maxWidth="sm" className="mt-5 p-4 rounded shadow-md" style={{ backgroundColor: '#b2ebf2' }}> 
        <Typography variant="h5" component="h2" gutterBottom className="text-center">
          Enter OTP sent to {email}
        </Typography>
        <form onSubmit={handleVerify} className="d-grid gap-3">
          <TextField
            label="OTP"
            type="text"
            placeholder="Enter OTP"
            required
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mb-2"
          />
          <Button
            variant="contained"
            sx={{ bgcolor: '#00acc1', '&:hover':{ bgcolor: '#008394' } }} 
            color="white"
            type="submit"
            className="btn btn-primary"
          >
            Verify
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default OtpForm;
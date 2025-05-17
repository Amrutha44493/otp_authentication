import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
    container.style.opacity = 0;
    container.style.transform = 'scale(0.9)';
    setTimeout(() => {
    container.style.opacity = 1;
    container.style.transform = 'scale(1)';
    container.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    }, 100); 
    }
  }, []);

  return (
    <Box
      sx={{
        background: '#f3e5f5', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        className="text-center p-5 rounded shadow-lg"
        sx={{
          backgroundColor: '#e1bee7',
        }}
        ref={containerRef}
        style={{ opacity: 0 }} 
      >
        <Typography
          variant="h4"
          component="h2"
          className="text-success mb-4"
          style={{
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          OTP Verified! Welcome!!!!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You have successfully verified your OTP.
        </Typography>
      </Container>
    </Box>
  );
};

export default Welcome;
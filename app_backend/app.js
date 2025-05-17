const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api', require('./routes/otpRoutes'));

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

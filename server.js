const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'production') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (error, req, res, next ) => {
    // let error = { ...error };
    error.message = error.message;

    // Log to console for dev
    console.log(error);

    // Mongoose bad objectid
    if(error.name === 'CastError') {
        const message = `Bootcamp not found with id of ${error.value}`;

        error = new ErrorResponse(message, 404);
    }

    // mongoose duplicate key
    if(error.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if(error.name === 'ValidationError') {
        const message = Object.values(error.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;
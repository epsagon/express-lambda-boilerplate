// Handle not found errors
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Requested Resource Not Found (404)'
  }).end();
};

// Handle internal server errors
const internalServerError = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err
  }).end();
};

module.exports = {
  notFound,
  internalServerError
}

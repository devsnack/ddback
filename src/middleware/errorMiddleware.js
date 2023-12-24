const AppError = require("../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode ? err.statusCode : 500;
  err.status = err.status ?? "error";
  res.status(err.statusCode ?? 500);
  let error = { ...err };
  error.message = err.message;
  if (error.name === "CastError") error = handleCastErrorDB(error);

  if (error.name === "CastError") error = handleCastErrorDB(error);
  if (error.code === 11000) error = handleDuplicateFieldsDB(error);
  if (error.name === "ValidationError") error = handleValidationErrorDB(error);

  return res.json({
    name: error.name,
    message: error.message,
    code: error.statusCode,
    status: error.status,
    // stack: err.stack,
  });
};

module.exports = {
  errorHandler,
};

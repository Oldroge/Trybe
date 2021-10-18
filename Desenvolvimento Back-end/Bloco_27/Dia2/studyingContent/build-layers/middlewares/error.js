// hello-msc/middlewares/error.js
module.exports = (err, _req, res, _next) => {
  // Any error be receive always for this middleware, so the first thing to do is the indetify
  // what is the error;

  // If were an Joi error, it knows that it is a validation error;
  if (err.isJoi) {
    // Soon, answer with the status 400 Bad Request;
    return res.status(400)
      // And with the message generate by Joi;
      .json({ error: { message: err.details[0].message } });
  }

  // Case dont be a Joi error, can be a domain error or a unexpected error.
  // It buid, a map that conect a domain error to the status HTTP;
  const statusByErrorCode = {
    notFound: 404, // Errors 'notFound' type, returning status 404 Not Found;
    alreadyExists: 409, // Type error 'aleradyExists' returning status 409 Conflict;
    // It can add many new codes as it can;
  };

  // Searching the status for the error that it treating
  // case havent a status for this code, it assume that is
  // an unknown error and use the status 500 Internal Server Error;
  const status = statusByErrorCode[err.code] || 500;

  // Finally, return the status and the erro message for the client; 
  res.status(status).json({ error: { message: err.message } });
};

'use strict';

const express = require('express');
const helmet = require('helmet');
const path = require('path');

// Create the Express server
const app = express();

// Enable some basic security
app.use(helmet());

// Serve the built react application
// this is generated by running `npm run build`
const distPath = path.join(__dirname, '../build');
app.use(express.static(distPath));

// For any URL that doesn't actively match a path, serve up index.html
// This is required for client side routing with SPAs.
// If you add API endpoints then those whould have to be defined
// before this line of code.
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Heroku sets a PORT environment variable that
// it expects the origin server to run on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, err => {
  if (err) {
    console.error('Failed to start up:', err.stack);
    throw err;
  }

  console.log(`API Server listening on port ${port}`);
});

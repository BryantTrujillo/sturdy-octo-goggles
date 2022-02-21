const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter
  .route('/')
  .all((req, res, next) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the campsites to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.status(403);
    res.end('PUT opteration not supported on /campsites');
  })
  .delete((req, res) => {
    res.end('Deleting all campsites');
  });

module.exports = campsiteRouter;
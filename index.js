const express = require('express');
const getIcon = require('./build');

const app = express();

app.get('/icons', (req, res) => {
  const { name, theme } = req.query;
  const icon = getIcon(name, theme);

  if (icon !== 'Icon not found') {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(icon);
  } else {
    res.status(404).send('Icon not found');
  }
});

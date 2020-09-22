// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

let path = require('path');

//activate compression
const compression = require('compression');

// server configuration
const PORT = 3010;


/* app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  console.log('sent')
  next();
}); */
app.use(compression());
app.use(express.static('dist'));

// catch-all route to index.html defined last 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `./dist/index.html`));
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

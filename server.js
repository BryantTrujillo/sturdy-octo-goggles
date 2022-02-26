const express = require('express');
const morgan = require('morgan');

const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter')
const partnerRouter = require('./routes/partnerRouter')

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter)
app.use('/partners', partnerRouter)

app.use((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

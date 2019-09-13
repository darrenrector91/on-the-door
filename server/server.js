const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const products = require('./routes/product.router');

const app = express();

//BodyParser
app.use(bodyParser.json());

//DB Config
const dB = 'mongodb://localhost:27017/on_the_door';

//Connect to Mongo
mongoose
  .connect(dB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

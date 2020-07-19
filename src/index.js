require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to a basic express App');
});
app.use(bodyParser.json());
app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

routes(app);

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Server Running on port http://localhost:${process.env.PORT || 3000}`
  )
);

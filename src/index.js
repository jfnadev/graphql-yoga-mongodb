const mongoose = require('mongoose');
const createServer = require('./createServer');
require('dotenv').config({ path: 'variables.env' });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(msg => console.log('connect success'))
  .catch(err => console.log(err));

const server = createServer();
server.start(
  {
    cors: {
      credentials: true,
      origin: ['http://localhost:3000'],
    },
  },
  deets => {
    console.log(`server running on port http://localhost:${deets.port}`);
  }
);

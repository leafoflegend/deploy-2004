const dotenv = require('dotenv');

dotenv.config();

const { startServer, app } = require('./api/index');
const { models, sync } = require('./db/index');

const shouldForce = process.env.NODE_ENV !== 'production';

sync( shouldForce)
  .then(startServer);

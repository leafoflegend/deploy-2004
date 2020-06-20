const dotenv = require('dotenv');

dotenv.config();

const { startServer, app } = require('./api/index');
const { models, sync } = require('./db/index');

const shouldForce = NODE_ENV === 'production'
  ? false
  : true;

sync( shouldForce)
  .then(startServer);

// This is a container server for this palmetto service

// this creates a simple http server with a `/` route on PORT 3000 (however, you can override the PORT by setting it in the package.json's `start` script).
require('health-server'); // https://github.com/tphummel/health-server
// this is the pub/sub medium we are using (couchdb), other options include, but are not limited to (RabbitMQ, AWS sns/sqs, etc)
var palmetto = require('@twilson63/palmetto-couchdb'); // https://github.com/twilson63/palmetto-couchdb
// this is setting up the palmetto service, see above's readme for what config options to pass in
var ee = palmetto({
  // for the couchdb adapter: `endpoint` is the database host and `app` is the database name
  endpoint: 'http://localhost:5984',
  app: 'samandnickdb'
});
// require our service, node looks for an index file when requiring a directory
var svc = require('./'); // = require('./index')
// pass in our setup palmetto configs into our service
svc(ee);
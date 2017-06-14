var express = require('express');
var merge = require('lodash.defaults');
var defaults = require('./defaults');
var setHeaders = require('./setHeaders');
var logger = require('./logger');

function host(options) {
  options = merge(defaults,options);

  const optionsAsString = JSON.stringify(options, null, '\t');
  logger.debug(`Options 👉 ${optionsAsString}`);

  options.setHeaders = (req, path) => { setHeaders(req, path, options); };

  var app = express();

  app.set('host', options.host);
  app.set('port', options.port);

  app.use(express.static(options.dir, options));

  var server = app.listen(app.get('port'), app.get('host'), () => {
    var host = server.address().address;
    var port = server.address().port;

    logger.info(`Listening at http://${host}:${port}`);
  });
}

module.exports = host

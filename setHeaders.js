var mime = require('mime');

function setHeaders(res, path, options) {
  var mimeType = mime.lookup(path);

  var milliseconds = options.cacheControl[mimeType] || 0;
  var header = 'public, max-age=' + milliseconds.toString();

  res.setHeader('Cache-Control', header);
}

module.exports = setHeaders;

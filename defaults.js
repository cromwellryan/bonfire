var path = require('path');

module.exports = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || null,
  dir: path.join(process.cwd(), 'dist'),
  extensions: ['html'],
  cacheControl: {
    'image/png': 24*60*60, //24 hours
    'image/svg+xml': 24*60*60, //24 hours
    'image/jpg': 24*60*60, //24 hours
    'image/jpeg': 24*60*60, //24 hours

    'text/css': 24*60*60, //24 hours

    'application/javascript': 24*60*60, //24 hours

    'text/html': 0 //never
  }
};



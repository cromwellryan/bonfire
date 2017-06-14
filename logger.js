var log = console.log;

function info(message) {
  log('bonfire (INFO):', message);
}

function error(message) {
  log('bonfire (ERROR):', message);
}

function debug(message) {
  log('bonfire (DEBUG):', message);
}

function noop() {}

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  debug: isProd ? noop : debug,
  info,
  error
};


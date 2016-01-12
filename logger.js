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

module.exports = {
  debug,
  info,
  error
};


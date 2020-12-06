const ERROR = "\x1b[41m\x1b[1m";
const CONTRAST = "\x1b[7m\x1b[1m";
const SUCCESS = "\x1b[30m\x1b[42m";
const RESET = "\x1b[0m";

function log(msg) {
    console.log('\n\n' + CONTRAST+ msg + RESET + '\n\n')
}

function error(msg) {
    console.log('\n\n' + ERROR+ msg + RESET + '\n\n')
}

function success(msg) {
    console.log('\n\n' + SUCCESS+ msg + RESET + '\n\n')
}

module.exports = { log, error, success };
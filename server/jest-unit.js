const __src = {
  provider: `${__dirname}/src/provider`,
  resource: `${__dirname}/src/resource`,
}

module.exports = {
  collectCoverage: true,
  globals: {
    __src
  },
  testMatch: ['**/tests/*.unit.js']
}

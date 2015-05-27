var test = require('tape'),
  g = require('./');

test('globals-docs', function(t) {
  t.equal(typeof g, 'object');
  t.end();
});

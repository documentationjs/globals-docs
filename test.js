var test = require('tape'),
  g = require('./');

test('globals-docs', function(t) {
  t.equal(typeof g.docs, 'object');

  t.equal(g.getDoc('Array'), 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', 'Array');
  t.equal(g.getDoc('Buffer'), 'https://nodejs.org/api/buffer.html', 'Buffer');
  t.equal(g.getDoc('boolean'), 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean', 'boolean lowercase');
  t.equal(g.getDoc('Boolean'), 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean', 'boolean uppercase');

  t.end();
});

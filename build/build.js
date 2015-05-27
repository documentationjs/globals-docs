var source = require('./global-docs.json'),
    fs = require('fs'),
    queue = require('queue-async'),
    got = require('got');

function mdc(obj, name, cb) {
    console.log('req %s', name);
    got('https://www.google.com/search?btnI&q=' + encodeURIComponent(name + ' site: developer.mozilla.org')).on('redirect', function(res) {
        if (res.headers.location) {
            console.log('%s -> %s', name, res.headers.location);
            obj[name] = res.headers.location;
        } else {
            console.log('no location for %s', name);
        }
        setTimeout(function() {
            cb();
        }, 100);
    });
}

var q = queue(1);

for (var k in source.browser) {
    if (typeof source.browser[k] === 'string' && source.browser[k] === "https://developer.mozilla.org/en-US/") {
        q.defer(mdc, source.browser, k);
    }
}

q.awaitAll(function() {
    fs.writeFileSync('global-docs.json', JSON.stringify(source, null, 2));
});

var docs = require('./globals-docs.json');

/**
 * Docs: an object of documentation as a plain-old-javascript object.
 *
 * Has keys that correspond to environments:
 *
 * - builtin
 * - nonstandard
 * - browser
 * - worker
 * - node
 */
module.exports.docs = docs;

/**
 * Get a URL for a global object.
 *
 * @param {string} name name of the global object
 * @param {Array<string>} env environments that will be reached. By default tries all environments
 * @returns {string|undefined} the URL of the documentation resource, if found
 * @example
 * getDoc('Array'); // yields MDC documentation for Array
 */
module.exports.getDoc = function(name, env) {
    if (!env) env = Object.keys(docs);

    for (var i = 0; i < env.length; i++) {
        var d = docs[env[i]][name];
        if (d) return d;
    }
};

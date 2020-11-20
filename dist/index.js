/*!
 * name: @jswork/next-secret-tmpl
 * description: Secret template engine.
 * homepage: https://github.com/afeiship/next-secret-tmpl
 * version: 1.0.0
 * date: 2020-11-20 17:52:44
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FORMAT_RE = /\${{(.*?)}}/g;
  var EMPTY_STR = '';

  nx.secretTmpl = function (inString, inContext) {
    var result = inString || EMPTY_STR;
    var replaceFn = function (_, match) {
      var path = match.trim();
      return nx.get(inContext, path) || EMPTY_STR;
    };
    return result.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.secretTmpl;
  }
})();

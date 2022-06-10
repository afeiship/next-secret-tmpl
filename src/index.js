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
    var res = result.replace(FORMAT_RE, replaceFn);
    var hasTpl = FORMAT_RE.test(res);
    return hasTpl ? nx.secretTmpl(res, inContext) : res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.secretTmpl;
  }
})();

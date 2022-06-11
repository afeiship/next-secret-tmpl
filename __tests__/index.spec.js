(function () {
  require('../src');

  describe('api.basic test', () => {
    test('single var should work fine', function () {
      var str = '${{ GITHUB_API_TOKEN }} hello world.';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.secretTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz hello world.');
    });

    test('multiple var should work fine', function () {
      var str = '${{ GITHUB_API_TOKEN }} - ${{ afei }}';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.secretTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz - zhengfei');
    });

    test('${{name}} no blank should work fine', () => {
      var str = '${{GITHUB_API_TOKEN}} - ${{afei}}';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.secretTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz - zhengfei');
    });

    test('nested tmpl should work', () => {
      var str = '${{GITHUB_API_TOKEN}} - ${{afei}}';
      var ctx = {
        sec_key: 'sec_key_value',
        GITHUB_API_TOKEN: 'xxx-yyy-zzz ++ ${{ sec_key }}',
        afei: 'zhengfei'
      };

      var res = nx.secretTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz ++ sec_key_value - zhengfei');
    });
  });
})();

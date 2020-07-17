# next-secret-tmpl
> Secret template engine.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-secret-tmpl
```

## usage
```js
import '@feizheng/next-secret-tmpl';

const str = '${{ GITHUB_API_TOKEN }} - ${{ afei }}';
const ctx = { GITHUB_API_TOKEN: 'xxx-yyy-zzz', afei:'zhengfei' };
const res = nx.secretTmpl(str, ctx);

// xxx-yyy-zzz - zhengfei
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-secret-tmpl/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-secret-tmpl
[version-url]: https://npmjs.org/package/@feizheng/next-secret-tmpl

[license-image]: https://img.shields.io/npm/l/@feizheng/next-secret-tmpl
[license-url]: https://github.com/afeiship/next-secret-tmpl/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-secret-tmpl
[size-url]: https://github.com/afeiship/next-secret-tmpl/blob/master/dist/next-secret-tmpl.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-secret-tmpl
[download-url]: https://www.npmjs.com/package/@feizheng/next-secret-tmpl

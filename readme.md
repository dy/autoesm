# autoesm

Node@13+ supports ES modules natively, but doesn't let importing arbitrary modules − it requires either `"type": "module"` in `package.json` or `.mjs` file extension to indicate that the file is ESM.

_autoesm_ resolves that by detecting ESM based on source, (not extension), allowing to import any ESM files (like existing ESM ecosystem with `"module"` field in `package.json` for unpkg/pikacdn). Slow? Maybe. But saves nerves and time figuring out deps.

## Usage

[![npm i autoesm](https://nodei.co/npm/autoesm.png?mini=true)](https://npmjs.org/package/autoesm/)

Providing node@13+ is used:

```sh
node --experimental-loader autoesm ./test.js
```

<p align="center">ॐ</p>

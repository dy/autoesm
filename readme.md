# autoesm

Node@13+ supports ES modules natively, but doesn't allow importing existing ESM packages with `"module"` field in `package.json` −
node requires either `"type": "module"` or `.mjs` file extension to indicate that the file is ESM.

_autoesm_ detects ESM based on file source, (not extension), enabling importing any ESM packages. Slow? Maybe. But saves a lot of time figuring out deps.

## Usage

[![npm i autoesm](https://nodei.co/npm/autoesm.png?mini=true)](https://npmjs.org/package/autoesm/)

Providing node@13+ is used:

```sh
node --experimental-loader autoesm ./test.js
```

<p align="center">ॐ</p>

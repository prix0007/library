---
id: setup
title: Setup JavaScript SDK
sidebar_label: Setup
hide_table_of_contents: false
---

# Setup
Let's start powering your Dapp with DripVerse.

## Prerequisites

### Minimum Requirements:
- Node `v16.x.x` or above.

## Install

The library is available on [NPM(Node Package Manager)](https://www.npmjs.com/package/dripverse).

From inside your project root, run:
```bash
npm install dripverse --save
```
or if you prefer yarn:
```bash
yarn install dripverse
```

You can verify which package version is installed by running:
```bash
npm list
```

If you can see something like this below, we are good to go:

```bash
└── dripverse@1.0.0
```

Please check the latest version as we keep updating the library pretty often as we add new features, fixes and enhancements.
You can find the version details here:

## Update

You can use [`ncu`](https://www.npmjs.com/package/npm-check-updates) to look for newer version availability: `ncu -u`

Of you can update the package version on `package.json` directly:

```json
"dependencies": {
    ...,
    "dripverse": "2.0.0",
    ...
}
```

And then run:
```js
npm install
```

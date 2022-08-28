# mini-sdk

A mini typescript/javascript crypto sdk. It can:

- Convert numbers to hex and bytes and vice-versa
- Decode/encode substrate addresses
- Compute hash with blake2b(atomically, incremental)

This sdk uses on bn.js, @subsquid/ss58-codec and blake2b libraries.

## Installation

```shell
# yarn, npm or pnpm
pnpm add @metmirr/mini-sdk
```

## How to use it

Please look into `src/tests.ts` file for detailed usage.

Example:

```ts
import { numberConversion } from '@metmirr/mini-sdk'

console.log(numberConversion.numberToHex(10))
// Output: a
```
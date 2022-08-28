import assert from 'assert'

import * as ss58 from './ss58'
import { atomicHash, Blake2Config, incrementalHash } from './hashing'
import { bytesToNumber, hexToNumber, numberToBytes, numberToHex } from './number-conversions'

// tests - number conversions
assert.equal(numberToHex(10), 'a')
assert.equal(hexToNumber('a'), 10)

assert.deepEqual(numberToBytes(256, 'be'), Buffer.from([1, 0]))
assert.deepEqual(bytesToNumber(Buffer.from([1, 0]), 'be'), 256)

assert.deepEqual(numberToBytes(256, 'le'), Buffer.from([0, 1]))
assert.deepEqual(bytesToNumber(Buffer.from([0, 1]), 'le'), 256)

// tests - ss58 address formating
const dotAddressString = '14mXUWWoT3Gksef4z4fCBYXmpHU5VtevivMYD5ovPtE6RyKx'
const kusamaAddressString = 'EwsehEPVc2Jx8LXgYHDboccQvNxAg2BN1t3pY3B7iK28RBm'
const dotAddress: ss58.Address = ss58.decode(dotAddressString)
const kusamaAddress = ss58.decode(kusamaAddressString)

assert.equal(dotAddress.prefix, 0)
assert.equal(ss58.encode(dotAddress), dotAddressString)
assert.equal(kusamaAddress.prefix, 2)
assert(ss58.encode(kusamaAddress), kusamaAddressString)

// tests - hashing
const abcString = 'abc'
const abcHex =
  'ba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d17d87c' +
  '5392aab792dc252d5de4533cc9518d38aa8dbf1925ab92386edd4009923'
const config: Blake2Config = { outputFormat: 'hex', outputLengthInBytes: 64 }

assert.equal(atomicHash(abcString, config), abcHex)

const b = incrementalHash(config.outputLengthInBytes)
b.update(Buffer.from(abcString))

assert.equal(b.digest(config.outputFormat), abcHex)

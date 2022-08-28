import BN from 'bn.js'

/**
 * Convert a number to hex string
 * @param input number
 * @returns string
 */
export function numberToHex(input: number): string {
  return new BN(input).toString('hex')
}

/**
 * Convert a hex string into a number
 * @param input string
 * @returns number
 */
export function hexToNumber(input: string): number {
  return new BN(input, 'hex').toNumber()
}

/**
 * Convert a number to buffer
 * @param input number
 * @param endian le | be
 * @returns
 */
export function numberToBytes(input: number, endian: BN.Endianness): Buffer {
  // for browser compatibility we are using toArrayLike
  return new BN(input).toArrayLike(Buffer, endian)
}

/**
 * Convert a buffer to number
 * @param input Buffer
 * @param endian le | be
 * @returns
 */
export function bytesToNumber(input: Buffer, endian: BN.Endianness): number {
  // for browser compatibility we are using toArrayLike
  return new BN(input, endian).toNumber()
}

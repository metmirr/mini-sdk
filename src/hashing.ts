import blake2b, { Blake2b } from 'blake2b'

/**
 * Configuration interface for Blake2b hashing class
 */
export interface Blake2Config {
  outputLengthInBytes: number
  outputFormat: 'binary' | 'hex'
}

/**
 * Compute hash for input with provided configs
 * @param input string | Buffer | Uint8Array
 * @param config: Blake2HashConfig
 * @returns Uint8Array | string
 */
export function atomicHash(
  input: string | Buffer | Uint8Array,
  { outputLengthInBytes, outputFormat }: Blake2Config,
): Uint8Array | string {
  const b = blake2b(outputLengthInBytes)
  if (typeof input === 'string') return b.update(Buffer.from(input)).digest(outputFormat)
  return b.update(input).digest(outputFormat)
}

/**
 * Create a new Blake2b instance, call 'update' method to update hash with new input and finally
 * call 'digest' to finalize hashing.
 * @param outputLengthInBytes number
 * @returns Blake2b
 */
export function incrementalHash(outputLengthInBytes: number): Blake2b {
  return blake2b(outputLengthInBytes)
}

declare module 'blake2b' {
  export default createHash

  declare function createHash(outlen: number): Blake2b

  export declare class Blake2b {
    update(data: Uint8Array | Buffer): this
    digest(out?: 'binary' | 'hex'): Uint8Array | string
  }
}

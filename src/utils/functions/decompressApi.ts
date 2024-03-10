import * as pako from "pako";

export function decompressApi<T>(data: number[]) {
  const compressedData = new Uint8Array(data);
  const decompressedData = pako.inflate(compressedData, { to: "string" });
  return JSON.parse(decompressedData) as T;
}

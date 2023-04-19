export const genNameSpaceId = () => {
  const array = new Uint8Array(8)
  window.crypto.getRandomValues(array)
  const hexString = Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return hexString
}

export const str2hexStr = (str: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hexString = Array.from(data)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return hexString
}

export const hexstr2Str = (hexStr: string) => {
  const hexCodes = hexStr.match(/.{2}/g) || []
  const bytes = hexCodes.map((code) => parseInt(code, 16))
  const decoder = new TextDecoder()
  return decoder.decode(new Uint8Array(bytes))
}

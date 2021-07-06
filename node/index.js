const crypto = require('crypto')

export const getRandomBytes = size => {
  const buffer = crypto.randomBytes(size)

  return buffer.toString('hex')
}

import crypto from 'crypto'

export const getRandomBytes = (size = 10) => {
  const buffer = crypto.randomBytes(size)

  return buffer.toString('hex')
}

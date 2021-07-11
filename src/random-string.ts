import crypto from 'crypto'

export const getRandomBytes = (size = 10): string => {
  const buffer = crypto.randomBytes(size)

  return buffer.toString('hex')
}

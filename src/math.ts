/**
 * @exports
 * @function
 * @param {number} total
 * @param {number} partialValue
 * @returns {number} percentage value of the partialValue in the total
 */
export function findPercentage(total, partialValue) {
  return !total || !partialValue ? 0 : Math.ceil((partialValue / total) * 100)
}

/**
 *
 * @param {number} total
 * @param {number} percent
 * @returns number
 */
export const getPercentageOf = (total = 0, percent = 0) => {
  return !total ? 0 : (total / 100) * percent
}

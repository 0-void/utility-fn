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

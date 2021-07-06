import _, {isNumber} from 'lodash'
import {merge as ObjectMapper} from 'object-mapper'

export function assemble(payload = {}, mapper = {}, calculations) {
  /**
   * Not sure it will work or not have to check
   */
  const result = ObjectMapper(payload, mapper)

  const {calculate} = calculations ?? {}

  /**
   * If the callback is a function then the callbacks is [callback] if not then callbacks is just
   * calculate
   */
  const callbacks = typeof calculate === 'function' ? [calculate] : calculate ? calculate : []

  if (callbacks.length === 0) {
    return result
  }

  const customCalculationResult = callbacks.map(callback => {
    if (typeof callback === 'function') {
      return merge(result, callback(result))
    }
    return result
  })

  return customCalculationResult.reduce((previous, current) => {
    return Object.assign(previous, current)
  }, {})
}

/**
 * @description Merge all the object into a single object
 * @exports
 * @function
 * @param  {...any} source
 * @returns {object}
 */
export function merge(...source) {
  return _.merge({}, ...source)
}

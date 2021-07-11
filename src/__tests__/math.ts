import { findPercentage, getPercentageOf } from 'index'

describe('finds percentage of the partial value in the total', () => {
  describe('Positive cases', () => {
    test('50 should be 10 percentage in 500', () => {
      expect(findPercentage(500, 50)).toEqual(10)
    })
  })

  describe('Negative cases', () => {
    test('it should return 0 if the total value is not passed', () => {
      expect(findPercentage(undefined, 50)).toEqual(0)
    })
    test('It should return 0 if the partial value is not passed', () => {
      expect(findPercentage(100, undefined)).toEqual(0)
    })
    test('It should return 0 if the partial value passed as null', () => {
      expect(findPercentage(100, null)).toEqual(0)
    })
    test('It should return 0 if the total value passed as null', () => {
      expect(findPercentage(null, 100)).toEqual(0)
    })
    test('It should return 0 if the both of the value is not passed', () => {
      expect(findPercentage(undefined, undefined)).toEqual(0)
    })
  })
})

describe('finds partial value of the total using the percentage', () => {
  describe('Positive cases', () => {
    test('10 percentage of 500 should be 50', () => {
      expect(getPercentageOf(500, 10)).toBe(50)
    })
  })
  describe('Negative cases', () => {
    test('It should return 0 if the percentage is not passed', () => {
      expect(getPercentageOf(500)).toBe(0)
    })
    test('It should return 0 if the total value is not passed', () => {
      expect(getPercentageOf(undefined, 10)).toBe(0)
    })
    test('It should return 0 if both of the value is not passed', () => {
      expect(getPercentageOf(undefined, undefined)).toBe(0)
    })
    test('It should return 0 if the total is null', () => {
      expect(getPercentageOf(null, 10)).toBe(0)
    })
    test('It should return 0 if the percentage is null', () => {
      expect(getPercentageOf(100, null)).toBe(0)
    })
  })
})

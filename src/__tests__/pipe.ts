import { pipe } from 'index'

describe('pipe through all the functions and return the result from all the values', () => {
  test('It should return a function', () => {
    expect(typeof pipe(() => {})).toEqual('function')
  })

  test('it should call the callback provided in the pipe with the given value', () => {
    const add = jest.fn().mockImplementation((value) => value + 1)

    const cumulativeAddition = pipe(add, add)

    const actual = cumulativeAddition(10)

    expect(add).toBeCalledWith(10)
    expect(add).toBeCalledTimes(2)

    expect(actual).toEqual(12)
  })
})

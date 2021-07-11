const pipe =
  (...functions) =>
  (arg) =>
    functions.reduce((value, func) => func(value), arg)

const add = (value = 0, step = 0) => value + step

const add10 = (value) => add(value, 10)

const cumulativeAddition = pipe(add10, add10, add10)

console.log(cumulativeAddition(0))

export const pipe =
  (...functions: Array<(...args: Array<any>) => any>) =>
  (arg) =>
    functions.reduce((value, func) => func(value), arg)

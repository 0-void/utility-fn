export const pipe =
  (...functions: Array<(...args: Array<unknown>) => unknown>) =>
  (arg: unknown): unknown =>
    functions.reduce((value, func) => func(value), arg)

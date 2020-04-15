/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
  // 没有的话返回参数
  if (funcs.length === 0) {
    return arg => arg
  }
  // 只有一个就直接返回
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 组成从右到左的调用函数
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

import { maxProductOfThree } from '../MaxProductOfThree'

describe('MaxProductOfThree', () => {
  it('expects to return -1 for array with only 2 numbers', () => {
    expect(maxProductOfThree([1, 3])).toBe(-1)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10])).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
  })
})

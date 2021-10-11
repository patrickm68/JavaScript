import { nextPowerOfTwo } from '../NextPowerOfTwo'

describe('NextPowerOfTwo', () => {
  it.each`
    input    | result
    ${0}     | ${1}
    ${1}     | ${2}
    ${2}     | ${4}
    ${3}     | ${4}
    ${5}     | ${8}
    ${125}   | ${128}
    ${1024}  | ${2048}
    ${10000} | ${16384}
  `('returns $result when is given $input', ({ input, result }) => {
    const res = nextPowerOfTwo(input)
    expect(res).toBe(result)
  })
})

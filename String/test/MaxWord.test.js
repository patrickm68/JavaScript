import { maxWord } from '../MaxWord'

describe('Testing the maxWord function', () => {
  it('Expect throw with non string argument', () => {
    expect(() => maxWord(10)).toThrow()
  })
  it('get the max word', () => {
    const string = 'ba ba ba ba banana'
    const mostOccuringWord = maxWord(string)
    expect(mostOccuringWord).toBe('ba')
  })
})

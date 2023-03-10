const { fizzBuzz } = require("../src");

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('returns Buzz when passed a multiple of 3 & 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
})


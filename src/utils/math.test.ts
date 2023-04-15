import { add } from './math'

describe('math', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })
})

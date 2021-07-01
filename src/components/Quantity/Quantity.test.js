import React from 'react'
import {recalculate} from './Quantity'

describe('Quantity calculator', () => {
  it('should be defined', () => {
    expect(recalculate).toBeDefined()
    expect(recalculate).not.toBeNaN()
  }),
    it('returns correct answer', () => {
    expect(recalculate(24, 26)).toBeCloseTo(1.17)
  })
})
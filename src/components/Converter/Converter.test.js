import React from "react";
import {Converter} from './Converter';
import {showResult} from './Converter';

describe('Converts numbers', () => {
  const value = 2
  it('should be defined and return number', () => {
    expect(showResult).toBeDefined()
    expect(showResult).not.toBeNaN()
    expect(showResult).not.toBeNull()
  }),
    it('returns correct answer', () => {
      expect(showResult(value, 200, 10)).toBeCloseTo(40)
    })
})

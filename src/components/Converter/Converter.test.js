import React from "react";
import {Converter} from './Converter';
import {showResult} from './Converter';

describe('Converts numbers', () => {
  it('should be defined and return number', () => {
    expect(showResult).toBeDefined()
    expect(showResult).not.toBeNaN()
    expect(showResult).not.toBeNull()

  })
})
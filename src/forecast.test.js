import { printForecast } from './forecast';
import { jest } from '@jest/globals';

describe('forecast test suite', () => {
  it('should throw an error if the argument is not an array of number', () => {
    const arg = ['one', 'two', 'three'];

    expect(() => printForecast(arg)).toThrow();
  });

  it('should not throw an error if the argument is an array of number', () => {
    const arg = [1, 2, 3];

    expect(() => printForecast(arg)).not.toThrow();
  });

  describe('log test suite', () => {
    it.each([
      {
        input: [17, 21, 23],
        expected: '17ºC in 1 days, 21ºC in 2 days, 23ºC in 3 days',
      },
      {
        input: [12, 5, -5, 0, 4],
        expected:
          '12ºC in 1 days, 5ºC in 2 days, -5ºC in 3 days, 0ºC in 4 days, 4ºC in 5 days',
      },
    ])('should log the correct message: $expected', ({ input, expected }) => {
      const logSpy = jest.spyOn(global.console, 'log');

      printForecast(input);

      expect(logSpy).toHaveBeenCalledWith(expected);

      logSpy.mockRestore();
    });
  });
});

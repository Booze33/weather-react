import { convert } from '../components/weather/Weather';

describe('convert', () => {
  test('converts Kelvin to Celsius correctly', () => {
    expect(convert(273)).toBe(0);
    expect(convert(300)).toBe(27);
  });

  test('Convert correctly', () => {
    expect(convert(0)).toBe(-273);
    expect(convert(100)).toBe(-173);
  });

  test('Convert correctly', () => {
    expect(convert(10)).toBe(-263);
    expect(convert(500)).toBe(227);
  });
});

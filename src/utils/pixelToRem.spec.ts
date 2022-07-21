import { pixelToRem } from './pixelToRem';
describe('Pixel To Rem', () => {
  it('should render 1 in 12px', () => {
    expect(pixelToRem(12)).toBe('1rem');
  });
});

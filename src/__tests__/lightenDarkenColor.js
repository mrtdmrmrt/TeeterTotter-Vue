import {helpers} from '../helpers';
test('Lighten Darken Color', () => {
  expect(helpers.LightenDarkenColor('#550061',100)).toBe('#b964c5');
});
test('Lighten Darken Color White', () => {
  expect(helpers.LightenDarkenColor('#8f32a3',300)).toBe('#ffffff');
});
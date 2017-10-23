import {notEmpty} from '../index';

test('Empty string', () => {
  expect(notEmpty('')).toBe(false);
});

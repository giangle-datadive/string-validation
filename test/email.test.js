import {isEmail} from '../index';

test('is an email', () => {
  expect(isEmail('gianglevan94@gmail.com')).toBe(true);
});

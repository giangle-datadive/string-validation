import {isPhoneNumber} from '../index';

test('test phone number with region code', () => {
  expect(isPhoneNumber('84914449191')).toBe(true);
});

test('test phone number', () => {
  expect(isPhoneNumber('+84914449090')).toBe(true);
});

test('test phone number with region code', () => {
  expect(isPhoneNumber('0914449090')).toBe(true);
});

test('test phone number with region code', () => {
  expect(isPhoneNumber('840914449090')).toBe(true);
});

test('test phone number with region code', () => {
  expect(isPhoneNumber('+840914449090')).toBe(true);
});

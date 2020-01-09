import checkData from '../checkData';


test('checkData', () => {
  expect(checkData(3)).toBe(3);
  expect(checkData('3')).toBe(3);
  expect(() => { checkData('hello'); }).toThrow(Error('Argument is not a number'));
});

var repeat = require('./index.js')

/* exmaple

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

*/

test('a 重複 5 次應該要等於 aaaaa', () => {
    expect(repeat('a',5)).toBe('aaaaa');
});
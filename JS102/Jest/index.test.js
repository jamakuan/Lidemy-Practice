var repeat = require('./index.js')

/* exmaple

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

*/

describe('Test repeat', function() {
    test('a 重複 5 次應該要等於 aaaaa', () => {
        expect(repeat('a',5)).toBe('aaaaa');
    });

    test('"" 重複 10 次應該要等於 ""', () => {
        expect(repeat('',10)).toBe('');
    });

    test('abc 重複 3 次應該要等於 abcabcabc', () => {
        expect(repeat('abc',3)).toBe('abcabcabc');
    });
})
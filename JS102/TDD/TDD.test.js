var reverse = require("./TDD")

describe('Test Reverse', function(){
    test('123 reverse should equal to 321', ()=>{
        expect(reverse('123')).toBe('321');
    });

    test('!!! reverse should equal to !!!', ()=>{
        expect(reverse('!!!')).toBe('!!!');
    });

    test('"" reverse should equal to ""', ()=>{
        expect(reverse('')).toBe('');
    });

})


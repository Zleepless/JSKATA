// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      // let [a, b, c] = ['a', 'b', 'c']; <--- This works too. But the below is much easier
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      const [a, b, c] = 'ab';
      assert.equal(c, void 0); // <-- Poor guy
    });
    it('unicode character work too', () => {
      const [a, space, coffee] = 'a ☕';
      assert.equal(coffee, '\u{2615}');
    });
  });
  
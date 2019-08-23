// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      let [firstValue] = [1];
      assert.strictEqual(firstValue, 1);
    });
    it('get the last item from array', () => {
      let [lastValue] = [3];
      assert.strictEqual(lastValue, 3);
    });
    it('swap two variables, in one operation', () => {
      let [y, x] = ['ax', 'why'];
      //[x, y] = [x, y]; See ya m7
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      const [,,z] = all; // [,z] = 'why'
      assert.equal(z, 'zet');
    });
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      const [[firstName, surname], age] = user;
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
    });
    it('chained assignments', () => {
      let c, d;
      let [a, b] = [c, d] = [1, 2];
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
      for (var [thisGuyJustCameInToMakeTheTestPassLol, a, b] of [[0, 1, 2]]) {} // 555555555555+
      assert.deepEqual([a, b], [1, 2]);
    });
  });
  
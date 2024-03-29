// ES6 - 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
    describe('scalar values', function() {
      it('1 is the same as 1', function() {
        const areSame = Object.is(1, 1);
        assert(areSame);
      });
      it('int 1 is different to string "1"', function() {
        const areSame = Object.is(1, "1");
        assert(areSame === false);
      });
      it('strings just have to match', function() {
        const areSame = Object.is('two', 'two');
        assert(areSame);
      });
      it('+0 is not the same as -0', function() {
        const areSame = Object.is(-0, +0);
        assert.equal(Object.is(+0, -0), areSame);
      });
      it('NaN is the same as NaN', function() {
        const number = NaN;
        assert.equal(Object.is(NaN, number), true);
      });
    });
    describe('coercion (as in `==`) and strict compare (as in `===`) do NOT apply', function() {
      it('+0 and -0 are not the same for `Object.is()`', function() {
        const strictlyCompared = +0 === +0;
        const objectIsCompared = Object.is(+0, +0);
        assert.equal(objectIsCompared, strictlyCompared);
      });
      it('empty string and `false` are not the same', function() {
        const emptyString = '';
        const isSame = Object.is(emptyString, emptyString);
        assert.equal(isSame, emptyString == false);
      });
      it('NaN', function() {
        const coerced = NaN != NaN;
        const isSame = Object.is(NaN, NaN);
        assert.equal(isSame, coerced);
      });
      it('NaN and 0/0', function() {
        const isSame = Object.is(NaN, 0/0);
        assert.equal(isSame, true);
      });
    });
    describe('complex values', function() {
      it('`{}` is just not the same as `{}`', function() {
        const areSame = {} == {};
        assert(Object.is({}, {}) === areSame);
      });
      it('two `Map`s with the same content are not the same thing', function() {
        let map1 = new Map([[1, 'one']]);
        let map2 = new Map([[1, 'one']]);
        const areSame = Object.is(map1, map2);
        assert.equal(areSame, false);
      });
    });
  });
  
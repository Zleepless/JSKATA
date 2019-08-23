// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
    it('`Map` is a new global constructor function', function() {
      const typeOfMap = 'function';
      assert.equal(typeof Map, typeOfMap);
    });
    it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
      let map = new Map().set('key', 'value');
      const value = map.get('key');
      assert.equal(value, 'value');
    });
    it('`has()` tells if map has the given key', function() {
      let map = new Map().set('key', 'value');
      const hasIt = map.has('key');
      assert.equal(hasIt, true);
    });
    it('a map is iterable', function() {
      let map = new Map()
      .set('1', 'one')
      .set('2', 'two');
      const mapAsArray = Array.from(map); // http://tddbin.com/#?kata=es6/language/array-api/from
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
    it('complex types can be keys', function() {
      const obj = {x: 1};
      const otherObj = {x: 1};
      let map = new Map()
      .set(obj, '')
      .set(otherObj, '');
      map.delete(otherObj);
      assert.equal(map.has(otherObj), false);
    });
  });
  
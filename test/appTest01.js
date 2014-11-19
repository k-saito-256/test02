var assert = require("assert")
describe('app server test', function(){
  it('app todo', function () {
  	assert.ok( 1=='1')
  });
});


describe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1, 2, 3].indexOf(5))
			assert.equal(-1, [1, 2, 3].indexOf(0))
		})
	})
})

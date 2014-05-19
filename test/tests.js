var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var dulyNoted = function () {
	console.log('This is the set time to log this information');
}

describe('_.remind()', function() {
	it('accepts two parameters', function() {
		expect(_.remind(1,dulyNoted)).to.eql(1,1);
	});
});

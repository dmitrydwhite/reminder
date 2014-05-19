var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var dulyNoted = function () {
	console.log('Test log');
};


var testDate = Date.now() + 2500;

describe('_.remind()', function() {

	it('accepts a number and a function, and performs the function', function(done) {
		expect(_.remind(testDate, done)).to.eql(0);
	});
});

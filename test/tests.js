var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var dulyNoted = function () {
	console.log('Test log');
};

var testDate = new Date(2014, 4, 19, 4, 27, 0);

describe('_.remind()', function() {
	it('accepts two parameters', function() {
		expect(_.remind(1,dulyNoted)).to.eql(1,1);
	});

	it('accepts a future date', function () {
		expect(_.remind(testDate, dulyNoted)).to.eql(new Date(2014, 4, 19, 10, 50, 0));
	});

	it('accepts a number and a function, and performs the function', function(done) {
		expect(_.remind(testDate, function() {
			done();
		})).to.eql(1);
	});
});

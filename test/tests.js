var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

var dulyNoted = function () {
	console.log('Test log');
};

describe('_.remind()', function() {
	it('accepts two parameters', function() {
		expect(_.remind(1,dulyNoted)).to.eql(1,1);
	});
	it('accepts a future date', function () {
		expect(_.remind(new Date(2014, 4, 19, 10, 40, 0), dulyNoted)).to.eql('Mon,'Test log');
	});
});

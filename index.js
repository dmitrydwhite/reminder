module.exports.remind = function (remindTime, cb) {
	var testNow = 0;
	while (remindTime > testNow) {
		if (remindTime === Date.now()) {
			cb();
		}
	testNow += 1;
	}
	return testNow;
};

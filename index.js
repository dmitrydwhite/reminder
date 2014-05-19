module.exports.remind = function (remindTime, cb) {
	// var testNow = 0;
	// while (remindTime > testNow) {
	// 	if (remindTime === Date.now()) {
	// 		cb();
	// 	}
	// testNow += 1;
	// }
	// return testNow;

	var difference = remindTime - Date.now();

	setTimeout(cb, difference);
	// var finalDate = new Date(difference);

	return 1;
};

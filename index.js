module.exports.remind = function (remindTime, cb) {

	var difference = remindTime - Date.now();

	setTimeout(cb, difference);

	return 0;
};

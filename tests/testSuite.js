function onReady() {
	QUnit.config.autostart = false;
	var testModules = [
		'apps/views/_baseView.js'
	];
	require(testModules, QUnit.start);
}
function onReady() {
	QUnit.config.autoStart = false;
	var testModules = []
	require(testModules, QUnit.start);
}
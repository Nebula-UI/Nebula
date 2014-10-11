define(function(require) {
	"use strict";

	module("Test Module Name A", {
		setup: function() {
			// Prepare something for all following tests.
			console.log("Todo: Setup Executed.")
		},
		teardown: function() {
			// Clean up after each test.
			console.log("Todo: Teardown Executed.")
		}
	});

	test("Equal assertion", function() {
		equal(1, "1", "String '1' and number 1 have the same value");
	});

	test("Strict equal assertion", function() {
		strictEqual(1, 1, "1 and 1 have the same value and type");
	});

	test("Deep equal assertion", function() {
		var obj = {
			foo: "bar"
		};

		deepEqual(obj, {
			foo: "bar"
		}, "Two objects can be the same in value");
	});

	test("ok test", function() {
		ok(true, "true succeeds");
	});

});
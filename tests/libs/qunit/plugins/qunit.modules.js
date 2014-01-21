QUnit.config.autostart = false;

QUnit.extend( QUnit, {

    modules: function(unitTests){

        require(unitTests, function() {
            var index;
            var tests = Array.prototype.slice.call(arguments);

            QUnit.start();
            for(index = 0; index < tests.length; index++) {
                tests[index]();
            }

        }, function(err) {
            console.error(err.message);
            if(err.requireModules && err.requireModules[0]) {
                console.error('An error occurred while loading require module "' + err.requireModules[0] + '".');
            }
        });
    }

});

define(['module'], function(module) {
	var masterConfig = (module.config && module.config()) || {};
	var html = {
		load: function(name, req, load, config) {
			config = config || {};
			var extension = masterConfig.extension;
			if (config.extension) {
				extension = config.extension;
			}
			extension = extension || 'html';
			var textName = 'text!' + name + '.' + extension;
			return req(['handlebars', textName], function(Handlebars, template) {
				template = Handlebars.compile(template);
				load(template);
			});
		}
	};
	return html;
});
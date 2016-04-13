'use strict';

var babel = require('babel-core');

module.exports = function (content, file, option) {
	var result = babel.transform(content, {
		presets: ['react', 'es2015']
	});

	return result.code;
};

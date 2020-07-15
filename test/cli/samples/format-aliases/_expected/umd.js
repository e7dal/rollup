(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('external')) :
	typeof define === 'function' && define.amd ? define(['exports', 'external'], factory) :
	(global = global || self, factory(global.bundle = {}, global.external));
}(this, (function (exports, external) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var external__default = /*#__PURE__*/_interopDefault(external);

	console.log('main');

	Object.defineProperty(exports, 'value', {
		enumerable: true,
		get: function () {
			return external__default['default'];
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));

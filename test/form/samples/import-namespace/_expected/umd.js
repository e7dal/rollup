(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('foo'), require('bar')) :
	typeof define === 'function' && define.amd ? define(['foo', 'bar'], factory) :
	(global = global || self, factory(global.foo, global.bar));
}(this, (function (foo, bar) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var bar__ns = /*#__PURE__*/_interopNamespace(bar);

	foo.x();
	console.log(bar__ns);

})));
